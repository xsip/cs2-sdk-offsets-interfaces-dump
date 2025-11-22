// generated - do not edit!

import {client_C_BaseCombatCharacter} from './C_BaseCombatCharacter';
// Class size: 0x15C8
// BaseClass: : public CS2::client::C_BaseCombatCharacter
export const client_C_BasePlayerPawn  = {
	...client_C_BaseCombatCharacter,
	m_pWeaponServices: 5104n, // client::CPlayer_WeaponServices**  | Schema_Ptr | Size: 0x8
	m_pItemServices: 5112n, // client::CPlayer_ItemServices**  | Schema_Ptr | Size: 0x8
	m_pAutoaimServices: 5120n, // client::CPlayer_AutoaimServices**  | Schema_Ptr | Size: 0x8
	m_pObserverServices: 5128n, // client::CPlayer_ObserverServices**  | Schema_Ptr | Size: 0x8
	m_pWaterServices: 5136n, // client::CPlayer_WaterServices**  | Schema_Ptr | Size: 0x8
	m_pUseServices: 5144n, // client::CPlayer_UseServices**  | Schema_Ptr | Size: 0x8
	m_pFlashlightServices: 5152n, // client::CPlayer_FlashlightServices**  | Schema_Ptr | Size: 0x8
	m_pCameraServices: 5160n, // client::CPlayer_CameraServices**  | Schema_Ptr | Size: 0x8
	m_pMovementServices: 5168n, // client::CPlayer_MovementServices**  | Schema_Ptr | Size: 0x8
	m_ServerViewAngleChanges: 5184n, // client::C_UtlVectorEmbeddedNetworkVar<client::ViewAngleServerChange_t>  | Schema_Atomic | Size: 0x68
	v_angle: 5288n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	v_anglePrevious: 5300n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_iHideHUD: 5312n, // uint32_t m_iHideHUD; |  0x14c0 | Schema_Builtin | Size: 0x4
	m_skybox3d: 5320n, // client::sky3dparams_t  | Schema_DeclaredClass | Size: 0x90
	m_flDeathTime: 5464n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPredictionError: 5468n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flPredictionErrorTime: 5480n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecLastCameraSetupLocalOrigin: 5512n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLastCameraSetupTime: 5524n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFOVSensitivityAdjust: 5528n, // float32 m_flFOVSensitivityAdjust; |  0x1598 | Schema_Builtin | Size: 0x4
	m_flMouseSensitivity: 5532n, // float32 m_flMouseSensitivity; |  0x159c | Schema_Builtin | Size: 0x4
	m_vOldOrigin: 5536n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flOldSimulationTime: 5548n, // float32 m_flOldSimulationTime; |  0x15ac | Schema_Builtin | Size: 0x4
	m_nLastExecutedCommandNumber: 5552n, // int32_t m_nLastExecutedCommandNumber; |  0x15b0 | Schema_Builtin | Size: 0x4
	m_nLastExecutedCommandTick: 5556n, // int32_t m_nLastExecutedCommandTick; |  0x15b4 | Schema_Builtin | Size: 0x4
	m_hController: 5560n, // GlobalTypes::CHandle<client::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hDefaultController: 5564n, // GlobalTypes::CHandle<client::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_bIsSwappingToPredictableController: 5568n, // bool m_bIsSwappingToPredictableController; |  0x15c0 | Schema_Builtin | Size: 0x1
}
