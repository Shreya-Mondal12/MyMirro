const Product = require('../models/Product');

// @desc    Get personalized recommendations based on user preferences
// @route   GET /api/recommendations
// @access  Private
exports.getRecommendations = async (req, res) => {
  try {
    const { preferences } = req.user;
    
    // Basic recommendation logic for MVP
    // Match products with user's preferred styles and categories
    const filter = {};
    
    if (preferences?.preferredStyles?.length > 0) {
      filter.styles = { $in: preferences.preferredStyles };
    }
    
    if (preferences?.favoriteCategories?.length > 0) {
      filter.category = { $in: preferences.favoriteCategories };
    }
    
    // Get recommended products
    const recommendedProducts = await Product.find(filter)
      .limit(10)
      .sort({ 'ratings.average': -1 });
    
    res.json({
      success: true,
      recommendations: recommendedProducts,
      reasonCodes: ['STYLE_MATCH', 'CATEGORY_PREFERENCE']
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get similar products
// @route   GET /api/recommendations/similar/:productId
// @access  Public
exports.getSimilarProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    
    // Find the source product
    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    // Find similar products based on category, style, and price range
    const similarProducts = await Product.find({
      _id: { $ne: productId },
      category: product.category,
      styles: { $in: product.styles },
      price: { 
        $gte: product.price * 0.7, 
        $lte: product.price * 1.3 
      }
    })
      .limit(6)
      .sort({ 'ratings.average': -1 });
    
    res.json({
      success: true,
      products: similarProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};