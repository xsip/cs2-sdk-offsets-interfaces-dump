// generated - do not edit!

import {server_CBaseCombatCharacter} from './CBaseCombatCharacter';
// Class size: 0xD90
// BaseClass: : public CS2::server::CBaseCombatCharacter
export const server_CBasePlayerPawn  = {
	...server_CBaseCombatCharacter,
	m_pWeaponServices: 3040n, // server::CPlayer_WeaponServices**  | Schema_Ptr | Size: 0x8
	m_pItemServices: 3048n, // server::CPlayer_ItemServices**  | Schema_Ptr | Size: 0x8
	m_pAutoaimServices: 3056n, // server::CPlayer_AutoaimServices**  | Schema_Ptr | Size: 0x8
	m_pObserverServices: 3064n, // server::CPlayer_ObserverServices**  | Schema_Ptr | Size: 0x8
	m_pWaterServices: 3072n, // server::CPlayer_WaterServices**  | Schema_Ptr | Size: 0x8
	m_pUseServices: 3080n, // server::CPlayer_UseServices**  | Schema_Ptr | Size: 0x8
	m_pFlashlightServices: 3088n, // server::CPlayer_FlashlightServices**  | Schema_Ptr | Size: 0x8
	m_pCameraServices: 3096n, // server::CPlayer_CameraServices**  | Schema_Ptr | Size: 0x8
	m_pMovementServices: 3104n, // server::CPlayer_MovementServices**  | Schema_Ptr | Size: 0x8
	m_ServerViewAngleChanges: 3120n, // server::CUtlVectorEmbeddedNetworkVar<server::ViewAngleServerChange_t>  | Schema_Atomic | Size: 0x68
	v_angle: 3224n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	v_anglePrevious: 3236n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_iHideHUD: 3248n, // uint32_t m_iHideHUD; |  0xcb0 | Schema_Builtin | Size: 0x4
	m_skybox3d: 3256n, // server::sky3dparams_t  | Schema_DeclaredClass | Size: 0x90
	m_fTimeLastHurt: 3400n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDeathTime: 3404n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fNextSuicideTime: 3408n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fInitHUD: 3412n, // bool m_fInitHUD; |  0xd54 | Schema_Builtin | Size: 0x1
	m_pExpresser: 3416n, // server::CAI_Expresser**  | Schema_Ptr | Size: 0x8
	m_hController: 3424n, // GlobalTypes::CHandle<server::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hDefaultController: 3428n, // GlobalTypes::CHandle<server::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_fHltvReplayDelay: 3436n, // float32 m_fHltvReplayDelay; |  0xd6c | Schema_Builtin | Size: 0x4
	m_fHltvReplayEnd: 3440n, // float32 m_fHltvReplayEnd; |  0xd70 | Schema_Builtin | Size: 0x4
	m_iHltvReplayEntity: 3444n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_sndOpvarLatchData: 3448n, // GlobalTypes::CUtlVector<client::sndopvarlatchdata_t>  | Schema_Atomic | Size: 0x18
}
