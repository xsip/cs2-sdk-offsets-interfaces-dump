// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xDF0
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CPlantedC4  = {
	...server_CBaseAnimGraph,
	m_bBombTicking: 2600n, // bool m_bBombTicking; |  0xa28 | Schema_Builtin | Size: 0x1
	m_flC4Blow: 2604n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nBombSite: 2608n, // int32_t m_nBombSite; |  0xa30 | Schema_Builtin | Size: 0x4
	m_nSourceSoundscapeHash: 2612n, // int32_t m_nSourceSoundscapeHash; |  0xa34 | Schema_Builtin | Size: 0x4
	m_bAbortDetonationBecauseWorldIsFrozen: 2616n, // bool m_bAbortDetonationBecauseWorldIsFrozen; |  0xa38 | Schema_Builtin | Size: 0x1
	m_AttributeManager: 2624n, // server::CAttributeContainer  | Schema_DeclaredClass | Size: 0x2f8
	m_OnBombDefused: 3384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBombBeginDefuse: 3408n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnBombDefuseAborted: 3432n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bCannotBeDefused: 3456n, // bool m_bCannotBeDefused; |  0xd80 | Schema_Builtin | Size: 0x1
	m_entitySpottedState: 3464n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 3488n, // int32_t m_nSpotRules; |  0xda0 | Schema_Builtin | Size: 0x4
	m_bHasExploded: 3492n, // bool m_bHasExploded; |  0xda4 | Schema_Builtin | Size: 0x1
	m_bBombDefused: 3493n, // bool m_bBombDefused; |  0xda5 | Schema_Builtin | Size: 0x1
	m_bTrainingPlacedByPlayer: 3494n, // bool m_bTrainingPlacedByPlayer; |  0xda6 | Schema_Builtin | Size: 0x1
	m_flTimerLength: 3496n, // float32 m_flTimerLength; |  0xda8 | Schema_Builtin | Size: 0x4
	m_bBeingDefused: 3500n, // bool m_bBeingDefused; |  0xdac | Schema_Builtin | Size: 0x1
	m_fLastDefuseTime: 3508n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDefuseLength: 3516n, // float32 m_flDefuseLength; |  0xdbc | Schema_Builtin | Size: 0x4
	m_flDefuseCountDown: 3520n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hBombDefuser: 3524n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_iProgressBarTime: 3528n, // int32_t m_iProgressBarTime; |  0xdc8 | Schema_Builtin | Size: 0x4
	m_bVoiceAlertFired: 3532n, // bool m_bVoiceAlertFired; |  0xdcc | Schema_Builtin | Size: 0x1
	m_bVoiceAlertPlayed: 3533n, // bool m_bVoiceAlertPlayed[4]; |  0xdcd | Schema_FixedArray | Size: 0x4
	m_flNextBotBeepTime: 3540n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_angCatchUpToPlayerEye: 3548n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flLastSpinDetectionTime: 3560n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
