// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x16D8
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_PlantedC4  = {
	...client_CBaseAnimGraph,
	m_bBombTicking: 4448n, // bool m_bBombTicking; |  0x1160 | Schema_Builtin | Size: 0x1
	m_nBombSite: 4452n, // int32_t m_nBombSite; |  0x1164 | Schema_Builtin | Size: 0x4
	m_nSourceSoundscapeHash: 4456n, // int32_t m_nSourceSoundscapeHash; |  0x1168 | Schema_Builtin | Size: 0x4
	m_entitySpottedState: 4464n, // client::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_flNextGlow: 4488n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextBeep: 4492n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flC4Blow: 4496n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bCannotBeDefused: 4500n, // bool m_bCannotBeDefused; |  0x1194 | Schema_Builtin | Size: 0x1
	m_bHasExploded: 4501n, // bool m_bHasExploded; |  0x1195 | Schema_Builtin | Size: 0x1
	m_flTimerLength: 4504n, // float32 m_flTimerLength; |  0x1198 | Schema_Builtin | Size: 0x4
	m_bBeingDefused: 4508n, // bool m_bBeingDefused; |  0x119c | Schema_Builtin | Size: 0x1
	m_bTriggerWarning: 4512n, // float32 m_bTriggerWarning; |  0x11a0 | Schema_Builtin | Size: 0x4
	m_bExplodeWarning: 4516n, // float32 m_bExplodeWarning; |  0x11a4 | Schema_Builtin | Size: 0x4
	m_bC4Activated: 4520n, // bool m_bC4Activated; |  0x11a8 | Schema_Builtin | Size: 0x1
	m_bTenSecWarning: 4521n, // bool m_bTenSecWarning; |  0x11a9 | Schema_Builtin | Size: 0x1
	m_flDefuseLength: 4524n, // float32 m_flDefuseLength; |  0x11ac | Schema_Builtin | Size: 0x4
	m_flDefuseCountDown: 4528n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bBombDefused: 4532n, // bool m_bBombDefused; |  0x11b4 | Schema_Builtin | Size: 0x1
	m_hBombDefuser: 4536n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_AttributeManager: 4544n, // client::C_AttributeContainer  | Schema_DeclaredClass | Size: 0x4d8
	m_hDefuserMultimeter: 5784n, // GlobalTypes::CHandle<client::C_Multimeter>  | Schema_Atomic | Size: 0x4
	m_flNextRadarFlashTime: 5788n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bRadarFlash: 5792n, // bool m_bRadarFlash; |  0x16a0 | Schema_Builtin | Size: 0x1
	m_pBombDefuser: 5796n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_fLastDefuseTime: 5800n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_pPredictionOwner: 5808n, // client::CBasePlayerController**  | Schema_Ptr | Size: 0x8
	m_vecC4ExplodeSpectatePos: 5816n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecC4ExplodeSpectateAng: 5828n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flC4ExplodeSpectateDuration: 5840n, // float32 m_flC4ExplodeSpectateDuration; |  0x16d0 | Schema_Builtin | Size: 0x4
}
