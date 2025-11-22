// generated - do not edit!

// Class size: 0x1D0
// BaseClass: NONE
export const animationsystem_CAnimDesc  = {
	m_name: 0n, // GlobalTypes::CBufferString  | Schema_Atomic | Size: 0x10
	m_flags: 16n, // animationsystem::CAnimDesc_Flag  | Schema_DeclaredClass | Size: 0x8
	fps: 24n, // float32 fps; |  0x18 | Schema_Builtin | Size: 0x4
	m_Data: 32n, // animationsystem::CAnimEncodedFrames  | Schema_DeclaredClass | Size: 0xd8
	m_movementArray: 248n, // GlobalTypes::CUtlVector<animationsystem::CAnimMovement>  | Schema_Atomic | Size: 0x18
	m_xInitialOffset: 272n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_eventArray: 304n, // GlobalTypes::CUtlVector<animationsystem::CAnimEventDefinition>  | Schema_Atomic | Size: 0x18
	m_activityArray: 328n, // GlobalTypes::CUtlVector<animationsystem::CAnimActivity>  | Schema_Atomic | Size: 0x18
	m_hierarchyArray: 352n, // GlobalTypes::CUtlVector<animationsystem::CAnimLocalHierarchy>  | Schema_Atomic | Size: 0x18
	framestalltime: 376n, // float32 framestalltime; |  0x178 | Schema_Builtin | Size: 0x4
	m_vecRootMin: 380n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecRootMax: 392n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecBoneWorldMin: 408n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_vecBoneWorldMax: 432n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_sequenceParams: 456n, // animationsystem::CAnimSequenceParams  | Schema_DeclaredClass | Size: 0x8
}
