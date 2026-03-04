// generated - do not edit!

import {client_C_BaseCombatCharacter} from './C_BaseCombatCharacter';
// Class size: 0x15B0
// BaseClass: : public CS2::client::C_BaseCombatCharacter
export const client_C_BasePlayerPawn  = {
	...client_C_BaseCombatCharacter,
	m_pWeaponServices: 5080n, // client::CPlayer_WeaponServices**  | Schema_Ptr | Size: 0x8
	m_pItemServices: 5088n, // client::CPlayer_ItemServices**  | Schema_Ptr | Size: 0x8
	m_pAutoaimServices: 5096n, // client::CPlayer_AutoaimServices**  | Schema_Ptr | Size: 0x8
	m_pObserverServices: 5104n, // client::CPlayer_ObserverServices**  | Schema_Ptr | Size: 0x8
	m_pWaterServices: 5112n, // client::CPlayer_WaterServices**  | Schema_Ptr | Size: 0x8
	m_pUseServices: 5120n, // client::CPlayer_UseServices**  | Schema_Ptr | Size: 0x8
	m_pFlashlightServices: 5128n, // client::CPlayer_FlashlightServices**  | Schema_Ptr | Size: 0x8
	m_pCameraServices: 5136n, // client::CPlayer_CameraServices**  | Schema_Ptr | Size: 0x8
	m_pMovementServices: 5144n, // client::CPlayer_MovementServices**  | Schema_Ptr | Size: 0x8
	m_ServerViewAngleChanges: 5160n, // client::C_UtlVectorEmbeddedNetworkVar<client::ViewAngleServerChange_t>  | Schema_Atomic | Size: 0x68
	v_angle: 5264n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	v_anglePrevious: 5276n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_iHideHUD: 5288n, // uint32_t m_iHideHUD; |  0x14a8 | Schema_Builtin | Size: 0x4
	m_skybox3d: 5296n, // client::sky3dparams_t  | Schema_DeclaredClass | Size: 0x90
	m_flDeathTime: 5440n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPredictionError: 5444n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flPredictionErrorTime: 5456n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecLastCameraSetupLocalOrigin: 5488n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLastCameraSetupTime: 5500n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFOVSensitivityAdjust: 5504n, // float32 m_flFOVSensitivityAdjust; |  0x1580 | Schema_Builtin | Size: 0x4
	m_flMouseSensitivity: 5508n, // float32 m_flMouseSensitivity; |  0x1584 | Schema_Builtin | Size: 0x4
	m_vOldOrigin: 5512n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flOldSimulationTime: 5524n, // float32 m_flOldSimulationTime; |  0x1594 | Schema_Builtin | Size: 0x4
	m_nLastExecutedCommandNumber: 5528n, // int32_t m_nLastExecutedCommandNumber; |  0x1598 | Schema_Builtin | Size: 0x4
	m_nLastExecutedCommandTick: 5532n, // int32_t m_nLastExecutedCommandTick; |  0x159c | Schema_Builtin | Size: 0x4
	m_hController: 5536n, // GlobalTypes::CHandle<client::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hDefaultController: 5540n, // GlobalTypes::CHandle<client::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_bIsSwappingToPredictableController: 5544n, // bool m_bIsSwappingToPredictableController; |  0x15a8 | Schema_Builtin | Size: 0x1
}
