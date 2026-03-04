// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xB00
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CPointCommentaryNode  = {
	...server_CBaseAnimGraph,
	m_iszPreCommands: 2592n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPostCommands: 2600n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszCommentaryFile: 2608n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszViewTarget: 2616n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hViewTarget: 2624n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hViewTargetAngles: 2628n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszViewPosition: 2632n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hViewPosition: 2640n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hViewPositionMover: 2644n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bPreventMovement: 2648n, // bool m_bPreventMovement; |  0xa58 | Schema_Builtin | Size: 0x1
	m_bUnderCrosshair: 2649n, // bool m_bUnderCrosshair; |  0xa59 | Schema_Builtin | Size: 0x1
	m_bUnstoppable: 2650n, // bool m_bUnstoppable; |  0xa5a | Schema_Builtin | Size: 0x1
	m_flFinishedTime: 2652n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecFinishOrigin: 2656n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecOriginalAngles: 2668n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecFinishAngles: 2680n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bPreventChangesWhileMoving: 2692n, // bool m_bPreventChangesWhileMoving; |  0xa84 | Schema_Builtin | Size: 0x1
	m_bDisabled: 2693n, // bool m_bDisabled; |  0xa85 | Schema_Builtin | Size: 0x1
	m_vecTeleportOrigin: 2696n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flAbortedPlaybackAt: 2708n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_pOnCommentaryStarted: 2712n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_pOnCommentaryStopped: 2736n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bActive: 2760n, // bool m_bActive; |  0xac8 | Schema_Builtin | Size: 0x1
	m_flStartTime: 2764n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartTimeInCommentary: 2768n, // float32 m_flStartTimeInCommentary; |  0xad0 | Schema_Builtin | Size: 0x4
	m_iszTitle: 2776n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSpeakers: 2784n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iNodeNumber: 2792n, // int32_t m_iNodeNumber; |  0xae8 | Schema_Builtin | Size: 0x4
	m_iNodeNumberMax: 2796n, // int32_t m_iNodeNumberMax; |  0xaec | Schema_Builtin | Size: 0x4
	m_bListenedTo: 2800n, // bool m_bListenedTo; |  0xaf0 | Schema_Builtin | Size: 0x1
}
