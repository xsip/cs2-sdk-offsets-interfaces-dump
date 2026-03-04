// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x16E0
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_PlantedC4  = {
	...client_CBaseAnimGraph,
	m_bBombTicking: 4464n, // bool m_bBombTicking; |  0x1170 | Schema_Builtin | Size: 0x1
	m_nBombSite: 4468n, // int32_t m_nBombSite; |  0x1174 | Schema_Builtin | Size: 0x4
	m_nSourceSoundscapeHash: 4472n, // int32_t m_nSourceSoundscapeHash; |  0x1178 | Schema_Builtin | Size: 0x4
	m_entitySpottedState: 4480n, // client::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_flNextGlow: 4504n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextBeep: 4508n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flC4Blow: 4512n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bCannotBeDefused: 4516n, // bool m_bCannotBeDefused; |  0x11a4 | Schema_Builtin | Size: 0x1
	m_bHasExploded: 4517n, // bool m_bHasExploded; |  0x11a5 | Schema_Builtin | Size: 0x1
	m_flTimerLength: 4520n, // float32 m_flTimerLength; |  0x11a8 | Schema_Builtin | Size: 0x4
	m_bBeingDefused: 4524n, // bool m_bBeingDefused; |  0x11ac | Schema_Builtin | Size: 0x1
	m_bTriggerWarning: 4528n, // float32 m_bTriggerWarning; |  0x11b0 | Schema_Builtin | Size: 0x4
	m_bExplodeWarning: 4532n, // float32 m_bExplodeWarning; |  0x11b4 | Schema_Builtin | Size: 0x4
	m_bC4Activated: 4536n, // bool m_bC4Activated; |  0x11b8 | Schema_Builtin | Size: 0x1
	m_bTenSecWarning: 4537n, // bool m_bTenSecWarning; |  0x11b9 | Schema_Builtin | Size: 0x1
	m_flDefuseLength: 4540n, // float32 m_flDefuseLength; |  0x11bc | Schema_Builtin | Size: 0x4
	m_flDefuseCountDown: 4544n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bBombDefused: 4548n, // bool m_bBombDefused; |  0x11c4 | Schema_Builtin | Size: 0x1
	m_hBombDefuser: 4552n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_AttributeManager: 4560n, // client::C_AttributeContainer  | Schema_DeclaredClass | Size: 0x4d0
	m_hDefuserMultimeter: 5792n, // GlobalTypes::CHandle<client::C_Multimeter>  | Schema_Atomic | Size: 0x4
	m_flNextRadarFlashTime: 5796n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bRadarFlash: 5800n, // bool m_bRadarFlash; |  0x16a8 | Schema_Builtin | Size: 0x1
	m_pBombDefuser: 5804n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_fLastDefuseTime: 5808n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_pPredictionOwner: 5816n, // client::CBasePlayerController**  | Schema_Ptr | Size: 0x8
	m_vecC4ExplodeSpectatePos: 5824n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecC4ExplodeSpectateAng: 5836n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flC4ExplodeSpectateDuration: 5848n, // float32 m_flC4ExplodeSpectateDuration; |  0x16d8 | Schema_Builtin | Size: 0x4
}
