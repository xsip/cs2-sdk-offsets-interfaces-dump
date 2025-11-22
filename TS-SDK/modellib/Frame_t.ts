// generated - do not edit!

// Class size: 0xC0
// BaseClass: NONE
export const modellib_Frame_t  = {
	m_flTime: 0n, // float32 m_flTime; |  0x0 | Schema_Builtin | Size: 0x4
	m_Stamp: 4n, // modellib::SkeletonAnimCapture_t::FrameStamp_t  | Schema_DeclaredClass | Size: 0x1c
	m_Transform: 32n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_bTeleport: 64n, // bool m_bTeleport; |  0x40 | Schema_Builtin | Size: 0x1
	m_CompositeBones: 72n, // GlobalTypes::CUtlVector<GlobalTypes::CTransform>  | Schema_Atomic | Size: 0x18
	m_SimStateBones: 96n, // GlobalTypes::CUtlVector<GlobalTypes::CTransform>  | Schema_Atomic | Size: 0x18
	m_FeModelAnims: 120n, // GlobalTypes::CUtlVector<GlobalTypes::CTransform>  | Schema_Atomic | Size: 0x18
	m_FeModelPos: 144n, // GlobalTypes::CUtlVector<GlobalTypes::VectorAligned>  | Schema_Atomic | Size: 0x18
	m_FlexControllerWeights: 168n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
}
