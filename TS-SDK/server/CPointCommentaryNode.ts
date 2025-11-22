// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xB90
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CPointCommentaryNode  = {
	...server_CBaseAnimGraph,
	m_iszPreCommands: 2704n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPostCommands: 2712n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszCommentaryFile: 2720n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszViewTarget: 2728n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hViewTarget: 2736n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hViewTargetAngles: 2740n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iszViewPosition: 2744n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hViewPosition: 2752n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hViewPositionMover: 2756n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bPreventMovement: 2760n, // bool m_bPreventMovement; |  0xac8 | Schema_Builtin | Size: 0x1
	m_bUnderCrosshair: 2761n, // bool m_bUnderCrosshair; |  0xac9 | Schema_Builtin | Size: 0x1
	m_bUnstoppable: 2762n, // bool m_bUnstoppable; |  0xaca | Schema_Builtin | Size: 0x1
	m_flFinishedTime: 2764n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecFinishOrigin: 2768n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecOriginalAngles: 2780n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecFinishAngles: 2792n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bPreventChangesWhileMoving: 2804n, // bool m_bPreventChangesWhileMoving; |  0xaf4 | Schema_Builtin | Size: 0x1
	m_bDisabled: 2805n, // bool m_bDisabled; |  0xaf5 | Schema_Builtin | Size: 0x1
	m_vecTeleportOrigin: 2808n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flAbortedPlaybackAt: 2820n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_pOnCommentaryStarted: 2824n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_pOnCommentaryStopped: 2864n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bActive: 2904n, // bool m_bActive; |  0xb58 | Schema_Builtin | Size: 0x1
	m_flStartTime: 2908n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flStartTimeInCommentary: 2912n, // float32 m_flStartTimeInCommentary; |  0xb60 | Schema_Builtin | Size: 0x4
	m_iszTitle: 2920n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSpeakers: 2928n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iNodeNumber: 2936n, // int32_t m_iNodeNumber; |  0xb78 | Schema_Builtin | Size: 0x4
	m_iNodeNumberMax: 2940n, // int32_t m_iNodeNumberMax; |  0xb7c | Schema_Builtin | Size: 0x4
	m_bListenedTo: 2944n, // bool m_bListenedTo; |  0xb80 | Schema_Builtin | Size: 0x1
}
