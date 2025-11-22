// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0x170
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_CameraServices  = {
	...client_CPlayerPawnComponent,
	m_vecCsViewPunchAngle: 64n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_nCsViewPunchAngleTick: 76n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flCsViewPunchAngleTickRatio: 80n, // float32 m_flCsViewPunchAngleTickRatio; |  0x50 | Schema_Builtin | Size: 0x4
	m_PlayerFog: 88n, // server::fogplayerparams_t  | Schema_DeclaredClass | Size: 0x40
	m_hColorCorrectionCtrl: 152n, // GlobalTypes::CHandle<server::CColorCorrection>  | Schema_Atomic | Size: 0x4
	m_hViewEntity: 156n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hTonemapController: 160n, // GlobalTypes::CHandle<server::CTonemapController2>  | Schema_Atomic | Size: 0x4
	m_audio: 168n, // server::audioparams_t  | Schema_DeclaredClass | Size: 0x78
	m_PostProcessingVolumes: 288n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CPostProcessingVolume>>  | Schema_Atomic | Size: 0x18
	m_flOldPlayerZ: 312n, // float32 m_flOldPlayerZ; |  0x138 | Schema_Builtin | Size: 0x4
	m_flOldPlayerViewOffsetZ: 316n, // float32 m_flOldPlayerViewOffsetZ; |  0x13c | Schema_Builtin | Size: 0x4
	m_hTriggerSoundscapeList: 344n, // server::CUtlVector<GlobalTypes::CHandle<server::CEnvSoundscapeTriggerable>>  | Schema_Atomic | Size: 0x18
}
