// generated - do not edit!

// Class size: 0x240
// BaseClass: NONE
export const animlib_CNmClip  = {
	m_skeleton: 0n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCNmSkeleton>  | Schema_Atomic | Size: 0x8
	m_nNumFrames: 8n, // uint32_t m_nNumFrames; |  0x8 | Schema_Builtin | Size: 0x4
	m_flDuration: 12n, // float32 m_flDuration; |  0xc | Schema_Builtin | Size: 0x4
	m_compressedPoseData: 16n, // GlobalTypes::CUtlBinaryBlock  | Schema_Atomic | Size: 0x10
	m_trackCompressionSettings: 32n, // GlobalTypes::CUtlVector<animlib::NmCompressionSettings_t>  | Schema_Atomic | Size: 0x18
	m_compressedPoseOffsets: 56n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_floatCurveIDs: 80n, // GlobalTypes::CUtlVector<GlobalTypes::CGlobalSymbol>  | Schema_Atomic | Size: 0x18
	m_floatCurveDefs: 104n, // GlobalTypes::CUtlVector<animlib::NmFloatCurveCompressionSettings_t>  | Schema_Atomic | Size: 0x18
	m_compressedFloatCurveData: 128n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_compressedFloatCurveOffsets: 152n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_secondaryAnimations: 216n, // GlobalTypes::CUtlVectorFixedGrowable<animlib::CNmClip*>  | Schema_Atomic | Size: 0x20
	m_syncTrack: 248n, // animlib::CNmSyncTrack  | Schema_DeclaredClass | Size: 0xb0
	m_rootMotion: 432n, // animlib::CNmRootMotionData  | Schema_DeclaredClass | Size: 0x50
	m_bIsAdditive: 512n, // bool m_bIsAdditive; |  0x200 | Schema_Builtin | Size: 0x1
	m_modelSpaceSamplingChain: 520n, // GlobalTypes::CUtlVector<animlib::CNmClip::ModelSpaceSamplingChainLink_t>  | Schema_Atomic | Size: 0x18
	m_modelSpaceBoneSamplingIndices: 544n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
}
