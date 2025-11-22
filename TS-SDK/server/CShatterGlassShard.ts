// generated - do not edit!

// Class size: 0xB8
// BaseClass: NONE
export const server_CShatterGlassShard  = {
	m_hShardHandle: 8n, // uint32_t m_hShardHandle; |  0x8 | Schema_Builtin | Size: 0x4
	m_vecPanelVertices: 16n, // GlobalTypes::CUtlVector<GlobalTypes::Vector2D>  | Schema_Atomic | Size: 0x18
	m_vLocalPanelSpaceOrigin: 40n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_hModel: 48n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCModel>  | Schema_Atomic | Size: 0x8
	m_hPhysicsEntity: 56n, // GlobalTypes::CHandle<server::CShatterGlassShardPhysics>  | Schema_Atomic | Size: 0x4
	m_hParentPanel: 60n, // GlobalTypes::CHandle<server::CFuncShatterglass>  | Schema_Atomic | Size: 0x4
	m_hParentShard: 64n, // uint32_t m_hParentShard; |  0x40 | Schema_Builtin | Size: 0x4
	m_ShatterStressType: 68n, // client::ShatterGlassStressType  | Schema_DeclaredEnum | Size: 0x1
	m_vecStressVelocity: 72n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bCreatedModel: 84n, // bool m_bCreatedModel; |  0x54 | Schema_Builtin | Size: 0x1
	m_flLongestEdge: 88n, // float32 m_flLongestEdge; |  0x58 | Schema_Builtin | Size: 0x4
	m_flShortestEdge: 92n, // float32 m_flShortestEdge; |  0x5c | Schema_Builtin | Size: 0x4
	m_flLongestAcross: 96n, // float32 m_flLongestAcross; |  0x60 | Schema_Builtin | Size: 0x4
	m_flShortestAcross: 100n, // float32 m_flShortestAcross; |  0x64 | Schema_Builtin | Size: 0x4
	m_flSumOfAllEdges: 104n, // float32 m_flSumOfAllEdges; |  0x68 | Schema_Builtin | Size: 0x4
	m_flArea: 108n, // float32 m_flArea; |  0x6c | Schema_Builtin | Size: 0x4
	m_nOnFrameEdge: 112n, // client::OnFrame  | Schema_DeclaredEnum | Size: 0x1
	m_nSubShardGeneration: 116n, // int32_t m_nSubShardGeneration; |  0x74 | Schema_Builtin | Size: 0x4
	m_vecAverageVertPosition: 120n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_bAverageVertPositionIsValid: 128n, // bool m_bAverageVertPositionIsValid; |  0x80 | Schema_Builtin | Size: 0x1
	m_vecPanelSpaceStressPositionA: 132n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_vecPanelSpaceStressPositionB: 140n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_bStressPositionAIsValid: 148n, // bool m_bStressPositionAIsValid; |  0x94 | Schema_Builtin | Size: 0x1
	m_bStressPositionBIsValid: 149n, // bool m_bStressPositionBIsValid; |  0x95 | Schema_Builtin | Size: 0x1
	m_bFlaggedForRemoval: 150n, // bool m_bFlaggedForRemoval; |  0x96 | Schema_Builtin | Size: 0x1
	m_flPhysicsEntitySpawnedAtTime: 152n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hEntityHittingMe: 156n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecNeighbors: 160n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
}
