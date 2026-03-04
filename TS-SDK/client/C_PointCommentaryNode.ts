// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x11C8
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_PointCommentaryNode  = {
	...client_CBaseAnimGraph,
	m_bActive: 4480n, // bool m_bActive; |  0x1180 | Schema_Builtin | Size: 0x1
	m_bWasActive: 4481n, // bool m_bWasActive; |  0x1181 | Schema_Builtin | Size: 0x1
	m_flEndTime: 4484n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartTime: 4488n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartTimeInCommentary: 4492n, // float32 m_flStartTimeInCommentary; |  0x118c | Schema_Builtin | Size: 0x4
	m_iszCommentaryFile: 4496n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszTitle: 4504n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSpeakers: 4512n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iNodeNumber: 4520n, // int32_t m_iNodeNumber; |  0x11a8 | Schema_Builtin | Size: 0x4
	m_iNodeNumberMax: 4524n, // int32_t m_iNodeNumberMax; |  0x11ac | Schema_Builtin | Size: 0x4
	m_bListenedTo: 4528n, // bool m_bListenedTo; |  0x11b0 | Schema_Builtin | Size: 0x1
	m_sndCommentary: 4536n, // client::CSoundPatch**  | Schema_Ptr | Size: 0x8
	m_hViewPosition: 4544n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_bRestartAfterRestore: 4548n, // bool m_bRestartAfterRestore; |  0x11c4 | Schema_Builtin | Size: 0x1
}
