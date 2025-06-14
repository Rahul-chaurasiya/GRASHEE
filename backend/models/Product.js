const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  highlights: [{
    type: String
  }],
  specifications: [{
    name: String,
    value: String
  }],
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }],
  basePrice: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number
  },
  discountPercentage: {
    type: Number
  },
  stock: {
    type: Number,
    required: true
  },
  images: {
    main: {
      type: String,
      required: true
    },
    gallery: [{
      url: String,
      alt: String,
      order: Number
    }],
    colorVariants: [{
      color: {
        name: String,
        code: String
      },
      images: [{
        url: String,
        alt: String,
        type: {
          type: String,
          enum: ['main', 'gallery'],
          default: 'gallery'
        }
      }]
    }],
    sizeGuide: {
      type: String
    }
  },
  colors: [{
    name: String,
    code: String,
    stock: Number
  }],
  sizes: [{
    name: String,
    stock: Number
  }],
  ratings: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: String,
    images: [{
      url: String,
      alt: String
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  brand: {
    type: String,
    required: true
  },
  warranty: {
    type: String
  },
  returnPolicy: {
    type: String
  },
  shippingInfo: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for calculating final price after discount
productSchema.virtual('finalPrice').get(function() {
  if (this.discountPrice) {
    return this.discountPrice;
  }
  if (this.discountPercentage) {
    return this.basePrice - (this.basePrice * this.discountPercentage / 100);
  }
  return this.basePrice;
});

// Method to update average rating
productSchema.methods.updateAverageRating = function() {
  if (this.reviews.length === 0) {
    this.ratings.average = 0;
    this.ratings.count = 0; 
  } else {
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.ratings.average = totalRating / this.reviews.length;
    this.ratings.count = this.reviews.length;
  }
};

// Pre-save middleware to calculate discount percentage if not provided
productSchema.pre('save', function(next) {
  if (this.discountPrice && !this.discountPercentage) {
    this.discountPercentage = Math.round(((this.basePrice - this.discountPrice) / this.basePrice) * 100);
  }
  next();
});

module.exports = mongoose.model('Product', productSchema); 