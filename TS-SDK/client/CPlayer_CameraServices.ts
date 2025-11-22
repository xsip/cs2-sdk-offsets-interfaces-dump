// generated - do not edit!

import {client_CPlayerPawnComponent} from './CPlayerPawnComponent';
// Class size: 0x288
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const client_CPlayer_CameraServices  = {
	...client_CPlayerPawnComponent,
	m_vecCsViewPunchAngle: 64n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_nCsViewPunchAngleTick: 76n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flCsViewPunchAngleTickRatio: 80n, // float32 m_flCsViewPunchAngleTickRatio; |  0x50 | Schema_Builtin | Size: 0x4
	m_PlayerFog: 88n, // client::C_fogplayerparams_t  | Schema_DeclaredClass | Size: 0x40
	m_hColorCorrectionCtrl: 152n, // GlobalTypes::CHandle<client::C_ColorCorrection>  | Schema_Atomic | Size: 0x4
	m_hViewEntity: 156n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hTonemapController: 160n, // GlobalTypes::CHandle<client::C_TonemapController2>  | Schema_Atomic | Size: 0x4
	m_audio: 168n, // client::audioparams_t  | Schema_DeclaredClass | Size: 0x78
	m_PostProcessingVolumes: 288n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_PostProcessingVolume>>  | Schema_Atomic | Size: 0x18
	m_flOldPlayerZ: 312n, // float32 m_flOldPlayerZ; |  0x138 | Schema_Builtin | Size: 0x4
	m_flOldPlayerViewOffsetZ: 316n, // float32 m_flOldPlayerViewOffsetZ; |  0x13c | Schema_Builtin | Size: 0x4
	m_CurrentFog: 320n, // client::fogparams_t  | Schema_DeclaredClass | Size: 0x68
	m_hOldFogController: 424n, // GlobalTypes::CHandle<client::C_FogController>  | Schema_Atomic | Size: 0x4
	m_bOverrideFogColor: 428n, // bool m_bOverrideFogColor[5]; |  0x1ac | Schema_FixedArray | Size: 0x5
	m_OverrideFogColor: 433n, // GlobalTypes::Color[5]  | Schema_FixedArray | Size: 0x14
	m_bOverrideFogStartEnd: 453n, // bool m_bOverrideFogStartEnd[5]; |  0x1c5 | Schema_FixedArray | Size: 0x5
	m_fOverrideFogStart: 460n, // float32 m_fOverrideFogStart[5]; |  0x1cc | Schema_FixedArray | Size: 0x14
	m_fOverrideFogEnd: 480n, // float32 m_fOverrideFogEnd[5]; |  0x1e0 | Schema_FixedArray | Size: 0x14
	m_hActivePostProcessingVolume: 500n, // GlobalTypes::CHandle<client::C_PostProcessingVolume>  | Schema_Atomic | Size: 0x4
	m_angDemoViewAngles: 504n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
