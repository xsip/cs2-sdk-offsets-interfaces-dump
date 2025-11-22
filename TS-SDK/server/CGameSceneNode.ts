// generated - do not edit!

// Class size: 0x160
// BaseClass: NONE
export const server_CGameSceneNode  = {
	m_nodeToWorld: 16n, // GlobalTypes::CTransformWS  | Schema_Atomic | Size: 0x20
	m_pOwner: 48n, // entity2::CEntityInstance**  | Schema_Ptr | Size: 0x8
	m_pParent: 56n, // server::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_pChild: 64n, // server::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_pNextSibling: 72n, // server::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_hParent: 120n, // server::CGameSceneNodeHandle  | Schema_DeclaredClass | Size: 0x10
	m_vecOrigin: 136n, // client::CNetworkOriginCellCoordQuantizedVector  | Schema_DeclaredClass | Size: 0x30
	m_angRotation: 192n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flScale: 204n, // float32 m_flScale; |  0xcc | Schema_Builtin | Size: 0x4
	m_vecAbsOrigin: 208n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_angAbsRotation: 220n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flAbsScale: 232n, // float32 m_flAbsScale; |  0xe8 | Schema_Builtin | Size: 0x4
	m_nParentAttachmentOrBone: 236n, // int16_t m_nParentAttachmentOrBone; |  0xec | Schema_Builtin | Size: 0x2
	m_bDebugAbsOriginChanges: 238n, // bool m_bDebugAbsOriginChanges; |  0xee | Schema_Builtin | Size: 0x1
	m_bDormant: 239n, // bool m_bDormant; |  0xef | Schema_Builtin | Size: 0x1
	m_bForceParentToBeNetworked: 240n, // bool m_bForceParentToBeNetworked; |  0xf0 | Schema_Builtin | Size: 0x1
	m_nHierarchicalDepth: 243n, // uint8_t m_nHierarchicalDepth; |  0xf3 | Schema_Builtin | Size: 0x1
	m_nHierarchyType: 244n, // uint8_t m_nHierarchyType; |  0xf4 | Schema_Builtin | Size: 0x1
	m_nDoNotSetAnimTimeInInvalidatePhysicsCount: 245n, // uint8_t m_nDoNotSetAnimTimeInInvalidatePhysicsCount; |  0xf5 | Schema_Builtin | Size: 0x1
	m_name: 248n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_hierarchyAttachName: 312n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_flZOffset: 316n, // float32 m_flZOffset; |  0x13c | Schema_Builtin | Size: 0x4
	m_flClientLocalScale: 320n, // float32 m_flClientLocalScale; |  0x140 | Schema_Builtin | Size: 0x4
	m_vRenderOrigin: 324n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
