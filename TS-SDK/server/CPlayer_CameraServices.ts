// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0x178
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_CameraServices  = {
	...client_CPlayerPawnComponent,
	m_vecCsViewPunchAngle: 72n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_nCsViewPunchAngleTick: 84n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flCsViewPunchAngleTickRatio: 88n, // float32 m_flCsViewPunchAngleTickRatio; |  0x58 | Schema_Builtin | Size: 0x4
	m_PlayerFog: 96n, // server::fogplayerparams_t  | Schema_DeclaredClass | Size: 0x40
	m_hColorCorrectionCtrl: 160n, // GlobalTypes::CHandle<server::CColorCorrection>  | Schema_Atomic | Size: 0x4
	m_hViewEntity: 164n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hTonemapController: 168n, // GlobalTypes::CHandle<server::CTonemapController2>  | Schema_Atomic | Size: 0x4
	m_audio: 176n, // server::audioparams_t  | Schema_DeclaredClass | Size: 0x78
	m_PostProcessingVolumes: 296n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CPostProcessingVolume>>  | Schema_Atomic | Size: 0x18
	m_flOldPlayerZ: 320n, // float32 m_flOldPlayerZ; |  0x140 | Schema_Builtin | Size: 0x4
	m_flOldPlayerViewOffsetZ: 324n, // float32 m_flOldPlayerViewOffsetZ; |  0x144 | Schema_Builtin | Size: 0x4
	m_hTriggerSoundscapeList: 352n, // server::CUtlVector<GlobalTypes::CHandle<server::CEnvSoundscapeTriggerable>>  | Schema_Atomic | Size: 0x18
}
