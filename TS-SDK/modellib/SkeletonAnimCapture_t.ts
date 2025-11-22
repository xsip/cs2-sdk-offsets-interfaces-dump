// generated - do not edit!

// Class size: 0xC0
// BaseClass: NONE
export const modellib_SkeletonAnimCapture_t  = {
	m_nEntIndex: 0n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_nEntParent: 4n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_ImportedCollision: 8n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityIndex>  | Schema_Atomic | Size: 0x18
	m_ModelName: 32n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_CaptureName: 40n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_ModelBindPose: 48n, // GlobalTypes::CUtlVector<modellib::SkeletonAnimCapture_t::Bone_t>  | Schema_Atomic | Size: 0x18
	m_FeModelInitPose: 72n, // GlobalTypes::CUtlVector<modellib::SkeletonAnimCapture_t::Bone_t>  | Schema_Atomic | Size: 0x18
	m_nFlexControllers: 96n, // int32_t m_nFlexControllers; |  0x60 | Schema_Builtin | Size: 0x4
	m_bPredicted: 100n, // bool m_bPredicted; |  0x64 | Schema_Builtin | Size: 0x1
	m_Frames: 168n, // GlobalTypes::CUtlVector<modellib::SkeletonAnimCapture_t::Frame_t>  | Schema_Atomic | Size: 0x18
}
