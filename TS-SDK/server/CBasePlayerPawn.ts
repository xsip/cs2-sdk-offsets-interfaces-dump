// generated - do not edit!

import {server_CBaseCombatCharacter} from './CBaseCombatCharacter';
// Class size: 0xD20
// BaseClass: : public CS2::server::CBaseCombatCharacter
export const server_CBasePlayerPawn  = {
	...server_CBaseCombatCharacter,
	m_pWeaponServices: 2928n, // server::CPlayer_WeaponServices**  | Schema_Ptr | Size: 0x8
	m_pItemServices: 2936n, // server::CPlayer_ItemServices**  | Schema_Ptr | Size: 0x8
	m_pAutoaimServices: 2944n, // server::CPlayer_AutoaimServices**  | Schema_Ptr | Size: 0x8
	m_pObserverServices: 2952n, // server::CPlayer_ObserverServices**  | Schema_Ptr | Size: 0x8
	m_pWaterServices: 2960n, // server::CPlayer_WaterServices**  | Schema_Ptr | Size: 0x8
	m_pUseServices: 2968n, // server::CPlayer_UseServices**  | Schema_Ptr | Size: 0x8
	m_pFlashlightServices: 2976n, // server::CPlayer_FlashlightServices**  | Schema_Ptr | Size: 0x8
	m_pCameraServices: 2984n, // server::CPlayer_CameraServices**  | Schema_Ptr | Size: 0x8
	m_pMovementServices: 2992n, // server::CPlayer_MovementServices**  | Schema_Ptr | Size: 0x8
	m_ServerViewAngleChanges: 3008n, // server::CUtlVectorEmbeddedNetworkVar<server::ViewAngleServerChange_t>  | Schema_Atomic | Size: 0x68
	v_angle: 3112n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	v_anglePrevious: 3124n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_iHideHUD: 3136n, // uint32_t m_iHideHUD; |  0xc40 | Schema_Builtin | Size: 0x4
	m_skybox3d: 3144n, // server::sky3dparams_t  | Schema_DeclaredClass | Size: 0x90
	m_fTimeLastHurt: 3288n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flDeathTime: 3292n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fNextSuicideTime: 3296n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fInitHUD: 3300n, // bool m_fInitHUD; |  0xce4 | Schema_Builtin | Size: 0x1
	m_pExpresser: 3304n, // server::CAI_Expresser**  | Schema_Ptr | Size: 0x8
	m_hController: 3312n, // GlobalTypes::CHandle<server::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_hDefaultController: 3316n, // GlobalTypes::CHandle<server::CBasePlayerController>  | Schema_Atomic | Size: 0x4
	m_fHltvReplayDelay: 3324n, // float32 m_fHltvReplayDelay; |  0xcfc | Schema_Builtin | Size: 0x4
	m_fHltvReplayEnd: 3328n, // float32 m_fHltvReplayEnd; |  0xd00 | Schema_Builtin | Size: 0x4
	m_iHltvReplayEntity: 3332n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_sndOpvarLatchData: 3336n, // GlobalTypes::CUtlVector<client::sndopvarlatchdata_t>  | Schema_Atomic | Size: 0x18
}
