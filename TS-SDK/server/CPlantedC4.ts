// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xE90
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CPlantedC4  = {
	...server_CBaseAnimGraph,
	m_bBombTicking: 2712n, // bool m_bBombTicking; |  0xa98 | Schema_Builtin | Size: 0x1
	m_flC4Blow: 2716n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nBombSite: 2720n, // int32_t m_nBombSite; |  0xaa0 | Schema_Builtin | Size: 0x4
	m_nSourceSoundscapeHash: 2724n, // int32_t m_nSourceSoundscapeHash; |  0xaa4 | Schema_Builtin | Size: 0x4
	m_bAbortDetonationBecauseWorldIsFrozen: 2728n, // bool m_bAbortDetonationBecauseWorldIsFrozen; |  0xaa8 | Schema_Builtin | Size: 0x1
	m_AttributeManager: 2736n, // server::CAttributeContainer  | Schema_DeclaredClass | Size: 0x2f8
	m_OnBombDefused: 3496n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnBombBeginDefuse: 3536n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnBombDefuseAborted: 3576n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bCannotBeDefused: 3616n, // bool m_bCannotBeDefused; |  0xe20 | Schema_Builtin | Size: 0x1
	m_entitySpottedState: 3624n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 3648n, // int32_t m_nSpotRules; |  0xe40 | Schema_Builtin | Size: 0x4
	m_bTrainingPlacedByPlayer: 3652n, // bool m_bTrainingPlacedByPlayer; |  0xe44 | Schema_Builtin | Size: 0x1
	m_bHasExploded: 3653n, // bool m_bHasExploded; |  0xe45 | Schema_Builtin | Size: 0x1
	m_flTimerLength: 3656n, // float32 m_flTimerLength; |  0xe48 | Schema_Builtin | Size: 0x4
	m_bBeingDefused: 3660n, // bool m_bBeingDefused; |  0xe4c | Schema_Builtin | Size: 0x1
	m_fLastDefuseTime: 3668n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDefuseLength: 3676n, // float32 m_flDefuseLength; |  0xe5c | Schema_Builtin | Size: 0x4
	m_flDefuseCountDown: 3680n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bBombDefused: 3684n, // bool m_bBombDefused; |  0xe64 | Schema_Builtin | Size: 0x1
	m_hBombDefuser: 3688n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_iProgressBarTime: 3692n, // int32_t m_iProgressBarTime; |  0xe6c | Schema_Builtin | Size: 0x4
	m_bVoiceAlertFired: 3696n, // bool m_bVoiceAlertFired; |  0xe70 | Schema_Builtin | Size: 0x1
	m_bVoiceAlertPlayed: 3697n, // bool m_bVoiceAlertPlayed[4]; |  0xe71 | Schema_FixedArray | Size: 0x4
	m_flNextBotBeepTime: 3704n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_angCatchUpToPlayerEye: 3712n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flLastSpinDetectionTime: 3724n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
