// generated - do not edit!

// Class size: 0x60
// BaseClass: NONE
export const server_CCommentarySystem  = {
	m_bCommentaryConvarsChanging: 17n, // bool m_bCommentaryConvarsChanging; |  0x11 | Schema_Builtin | Size: 0x1
	m_bCommentaryEnabledMidGame: 18n, // bool m_bCommentaryEnabledMidGame; |  0x12 | Schema_Builtin | Size: 0x1
	m_flNextTeleportTime: 20n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iTeleportStage: 24n, // int32_t m_iTeleportStage; |  0x18 | Schema_Builtin | Size: 0x4
	m_bCheatState: 28n, // bool m_bCheatState; |  0x1c | Schema_Builtin | Size: 0x1
	m_bIsFirstSpawnGroupToLoad: 29n, // bool m_bIsFirstSpawnGroupToLoad; |  0x1d | Schema_Builtin | Size: 0x1
	m_hCurrentNode: 56n, // GlobalTypes::CHandle<server::CPointCommentaryNode>  | Schema_Atomic | Size: 0x4
	m_hActiveCommentaryNode: 60n, // GlobalTypes::CHandle<server::CPointCommentaryNode>  | Schema_Atomic | Size: 0x4
	m_hLastCommentaryNode: 64n, // GlobalTypes::CHandle<server::CPointCommentaryNode>  | Schema_Atomic | Size: 0x4
	m_vecNodes: 72n, // server::CUtlVector<GlobalTypes::CHandle<server::CPointCommentaryNode>>  | Schema_Atomic | Size: 0x18
}
