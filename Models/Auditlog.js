import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  action: String,

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  storeId: String,

  changeDetails: Object
});

export default mongoose.model("AuditLog", auditLogSchema);