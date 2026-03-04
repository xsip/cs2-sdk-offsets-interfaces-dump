// generated - do not edit!

import {client_CPlayerPawnComponent} from './CPlayerPawnComponent';
// Class size: 0x290
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const client_CPlayer_CameraServices  = {
	...client_CPlayerPawnComponent,
	m_vecCsViewPunchAngle: 72n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_nCsViewPunchAngleTick: 84n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flCsViewPunchAngleTickRatio: 88n, // float32 m_flCsViewPunchAngleTickRatio; |  0x58 | Schema_Builtin | Size: 0x4
	m_PlayerFog: 96n, // client::C_fogplayerparams_t  | Schema_DeclaredClass | Size: 0x40
	m_hColorCorrectionCtrl: 160n, // GlobalTypes::CHandle<client::C_ColorCorrection>  | Schema_Atomic | Size: 0x4
	m_hViewEntity: 164n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hTonemapController: 168n, // GlobalTypes::CHandle<client::C_TonemapController2>  | Schema_Atomic | Size: 0x4
	m_audio: 176n, // client::audioparams_t  | Schema_DeclaredClass | Size: 0x78
	m_PostProcessingVolumes: 296n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_PostProcessingVolume>>  | Schema_Atomic | Size: 0x18
	m_flOldPlayerZ: 320n, // float32 m_flOldPlayerZ; |  0x140 | Schema_Builtin | Size: 0x4
	m_flOldPlayerViewOffsetZ: 324n, // float32 m_flOldPlayerViewOffsetZ; |  0x144 | Schema_Builtin | Size: 0x4
	m_CurrentFog: 328n, // client::fogparams_t  | Schema_DeclaredClass | Size: 0x68
	m_hOldFogController: 432n, // GlobalTypes::CHandle<client::C_FogController>  | Schema_Atomic | Size: 0x4
	m_bOverrideFogColor: 436n, // bool m_bOverrideFogColor[5]; |  0x1b4 | Schema_FixedArray | Size: 0x5
	m_OverrideFogColor: 441n, // GlobalTypes::Color[5]  | Schema_FixedArray | Size: 0x14
	m_bOverrideFogStartEnd: 461n, // bool m_bOverrideFogStartEnd[5]; |  0x1cd | Schema_FixedArray | Size: 0x5
	m_fOverrideFogStart: 468n, // float32 m_fOverrideFogStart[5]; |  0x1d4 | Schema_FixedArray | Size: 0x14
	m_fOverrideFogEnd: 488n, // float32 m_fOverrideFogEnd[5]; |  0x1e8 | Schema_FixedArray | Size: 0x14
	m_hActivePostProcessingVolume: 508n, // GlobalTypes::CHandle<client::C_PostProcessingVolume>  | Schema_Atomic | Size: 0x4
	m_angDemoViewAngles: 512n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
