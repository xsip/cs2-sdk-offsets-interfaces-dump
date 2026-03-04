// generated - do not edit!

import {server_CBasePlayerWeapon} from './CBasePlayerWeapon';
// Class size: 0x1130
// BaseClass: : public CS2::server::CBasePlayerWeapon
export const server_CCSWeaponBase  = {
	...server_CBasePlayerWeapon,
	m_bRemoveable: 3616n, // bool m_bRemoveable; |  0xe20 | Schema_Builtin | Size: 0x1
	m_bPlayerAmmoStockOnPickup: 3617n, // bool m_bPlayerAmmoStockOnPickup; |  0xe21 | Schema_Builtin | Size: 0x1
	m_bRequireUseToTouch: 3618n, // bool m_bRequireUseToTouch; |  0xe22 | Schema_Builtin | Size: 0x1
	m_iWeaponGameplayAnimState: 3620n, // client::WeaponGameplayAnimState  | Schema_DeclaredEnum | Size: 0x2
	m_flWeaponGameplayAnimStateTimestamp: 3624n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flInspectCancelCompleteTime: 3628n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInspectPending: 3632n, // bool m_bInspectPending; |  0xe30 | Schema_Builtin | Size: 0x1
	m_bInspectShouldLoop: 3633n, // bool m_bInspectShouldLoop; |  0xe31 | Schema_Builtin | Size: 0x1
	m_nLastEmptySoundCmdNum: 3676n, // int32_t m_nLastEmptySoundCmdNum; |  0xe5c | Schema_Builtin | Size: 0x4
	m_bFireOnEmpty: 3704n, // bool m_bFireOnEmpty; |  0xe78 | Schema_Builtin | Size: 0x1
	m_OnPlayerPickup: 3712n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_weaponMode: 3736n, // client::CSWeaponMode  | Schema_DeclaredEnum | Size: 0x4
	m_flTurningInaccuracyDelta: 3740n, // float32 m_flTurningInaccuracyDelta; |  0xe9c | Schema_Builtin | Size: 0x4
	m_vecTurningInaccuracyEyeDirLast: 3744n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTurningInaccuracy: 3756n, // float32 m_flTurningInaccuracy; |  0xeac | Schema_Builtin | Size: 0x4
	m_fAccuracyPenalty: 3760n, // float32 m_fAccuracyPenalty; |  0xeb0 | Schema_Builtin | Size: 0x4
	m_flLastAccuracyUpdateTime: 3764n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fAccuracySmoothedForZoom: 3768n, // float32 m_fAccuracySmoothedForZoom; |  0xeb8 | Schema_Builtin | Size: 0x4
	m_iRecoilIndex: 3772n, // int32_t m_iRecoilIndex; |  0xebc | Schema_Builtin | Size: 0x4
	m_flRecoilIndex: 3776n, // float32 m_flRecoilIndex; |  0xec0 | Schema_Builtin | Size: 0x4
	m_bBurstMode: 3780n, // bool m_bBurstMode; |  0xec4 | Schema_Builtin | Size: 0x1
	m_nPostponeFireReadyTicks: 3784n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flPostponeFireReadyFrac: 3788n, // float32 m_flPostponeFireReadyFrac; |  0xecc | Schema_Builtin | Size: 0x4
	m_bInReload: 3792n, // bool m_bInReload; |  0xed0 | Schema_Builtin | Size: 0x1
	m_flDroppedAtTime: 3796n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsHauledBack: 3800n, // bool m_bIsHauledBack; |  0xed8 | Schema_Builtin | Size: 0x1
	m_bSilencerOn: 3801n, // bool m_bSilencerOn; |  0xed9 | Schema_Builtin | Size: 0x1
	m_flTimeSilencerSwitchComplete: 3804n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWeaponActionPlaybackRate: 3808n, // float32 m_flWeaponActionPlaybackRate; |  0xee0 | Schema_Builtin | Size: 0x4
	m_iOriginalTeamNumber: 3812n, // int32_t m_iOriginalTeamNumber; |  0xee4 | Schema_Builtin | Size: 0x4
	m_iMostRecentTeamNumber: 3816n, // int32_t m_iMostRecentTeamNumber; |  0xee8 | Schema_Builtin | Size: 0x4
	m_bDroppedNearBuyZone: 3820n, // bool m_bDroppedNearBuyZone; |  0xeec | Schema_Builtin | Size: 0x1
	m_flNextAttackRenderTimeOffset: 3824n, // float32 m_flNextAttackRenderTimeOffset; |  0xef0 | Schema_Builtin | Size: 0x4
	m_bCanBePickedUp: 3848n, // bool m_bCanBePickedUp; |  0xf08 | Schema_Builtin | Size: 0x1
	m_bUseCanOverrideNextOwnerTouchTime: 3849n, // bool m_bUseCanOverrideNextOwnerTouchTime; |  0xf09 | Schema_Builtin | Size: 0x1
	m_nextOwnerTouchTime: 3852n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nextPrevOwnerTouchTime: 3856n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nextPrevOwnerUseTime: 3864n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hPrevOwner: 3868n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nDropTick: 3872n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasActiveWeaponWhenDropped: 3876n, // bool m_bWasActiveWeaponWhenDropped; |  0xf24 | Schema_Builtin | Size: 0x1
	m_donated: 3908n, // bool m_donated; |  0xf44 | Schema_Builtin | Size: 0x1
	m_fLastShotTime: 3912n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasOwnedByCT: 3916n, // bool m_bWasOwnedByCT; |  0xf4c | Schema_Builtin | Size: 0x1
	m_bWasOwnedByTerrorist: 3917n, // bool m_bWasOwnedByTerrorist; |  0xf4d | Schema_Builtin | Size: 0x1
	m_numRemoveUnownedWeaponThink: 3920n, // int32_t m_numRemoveUnownedWeaponThink; |  0xf50 | Schema_Builtin | Size: 0x4
	m_IronSightController: 3928n, // server::CIronSightController  | Schema_DeclaredClass | Size: 0x18
	m_iIronSightMode: 3952n, // int32_t m_iIronSightMode; |  0xf70 | Schema_Builtin | Size: 0x4
	m_flLastLOSTraceFailureTime: 3956n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWatTickOffset: 3960n, // float32 m_flWatTickOffset; |  0xf78 | Schema_Builtin | Size: 0x4
	m_flLastShakeTime: 3976n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
