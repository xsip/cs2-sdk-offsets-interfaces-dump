// generated - do not edit!

// Class size: 0x180
// BaseClass: NONE
export const client_CGameSceneNode  = {
	m_nodeToWorld: 16n, // GlobalTypes::CTransformWS  | Schema_Atomic | Size: 0x20
	m_pOwner: 48n, // entity2::CEntityInstance**  | Schema_Ptr | Size: 0x8
	m_pParent: 56n, // client::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_pChild: 64n, // client::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_pNextSibling: 72n, // client::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_hParent: 120n, // client::CGameSceneNodeHandle  | Schema_DeclaredClass | Size: 0x10
	m_vecOrigin: 136n, // client::CNetworkOriginCellCoordQuantizedVector  | Schema_DeclaredClass | Size: 0x30
	m_angRotation: 192n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flScale: 204n, // float32 m_flScale; |  0xcc | Schema_Builtin | Size: 0x4
	m_vecAbsOrigin: 208n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_angAbsRotation: 220n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flAbsScale: 232n, // float32 m_flAbsScale; |  0xe8 | Schema_Builtin | Size: 0x4
	m_vecWrappedLocalOrigin: 236n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angWrappedLocalRotation: 248n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flWrappedScale: 260n, // float32 m_flWrappedScale; |  0x104 | Schema_Builtin | Size: 0x4
	m_nParentAttachmentOrBone: 264n, // int16_t m_nParentAttachmentOrBone; |  0x108 | Schema_Builtin | Size: 0x2
	m_bDebugAbsOriginChanges: 266n, // bool m_bDebugAbsOriginChanges; |  0x10a | Schema_Builtin | Size: 0x1
	m_bDormant: 267n, // bool m_bDormant; |  0x10b | Schema_Builtin | Size: 0x1
	m_bForceParentToBeNetworked: 268n, // bool m_bForceParentToBeNetworked; |  0x10c | Schema_Builtin | Size: 0x1
	m_nHierarchicalDepth: 271n, // uint8_t m_nHierarchicalDepth; |  0x10f | Schema_Builtin | Size: 0x1
	m_nHierarchyType: 272n, // uint8_t m_nHierarchyType; |  0x110 | Schema_Builtin | Size: 0x1
	m_nDoNotSetAnimTimeInInvalidatePhysicsCount: 273n, // uint8_t m_nDoNotSetAnimTimeInInvalidatePhysicsCount; |  0x111 | Schema_Builtin | Size: 0x1
	m_name: 276n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_hierarchyAttachName: 344n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_flZOffset: 348n, // float32 m_flZOffset; |  0x15c | Schema_Builtin | Size: 0x4
	m_flClientLocalScale: 352n, // float32 m_flClientLocalScale; |  0x160 | Schema_Builtin | Size: 0x4
	m_vRenderOrigin: 356n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
