// generated - do not edit!

import {server_CBasePlayerWeapon} from './CBasePlayerWeapon';
// Class size: 0x11D0
// BaseClass: : public CS2::server::CBasePlayerWeapon
export const server_CCSWeaponBase  = {
	...server_CBasePlayerWeapon,
	m_bRemoveable: 3744n, // bool m_bRemoveable; |  0xea0 | Schema_Builtin | Size: 0x1
	m_bPlayerAmmoStockOnPickup: 3760n, // bool m_bPlayerAmmoStockOnPickup; |  0xeb0 | Schema_Builtin | Size: 0x1
	m_bRequireUseToTouch: 3761n, // bool m_bRequireUseToTouch; |  0xeb1 | Schema_Builtin | Size: 0x1
	m_iWeaponGameplayAnimState: 3762n, // client::WeaponGameplayAnimState  | Schema_DeclaredEnum | Size: 0x2
	m_flWeaponGameplayAnimStateTimestamp: 3764n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flInspectCancelCompleteTime: 3768n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInspectPending: 3772n, // bool m_bInspectPending; |  0xebc | Schema_Builtin | Size: 0x1
	m_bInspectShouldLoop: 3773n, // bool m_bInspectShouldLoop; |  0xebd | Schema_Builtin | Size: 0x1
	m_nLastEmptySoundCmdNum: 3816n, // int32_t m_nLastEmptySoundCmdNum; |  0xee8 | Schema_Builtin | Size: 0x4
	m_bFireOnEmpty: 3848n, // bool m_bFireOnEmpty; |  0xf08 | Schema_Builtin | Size: 0x1
	m_OnPlayerPickup: 3856n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_weaponMode: 3896n, // client::CSWeaponMode  | Schema_DeclaredEnum | Size: 0x4
	m_flTurningInaccuracyDelta: 3900n, // float32 m_flTurningInaccuracyDelta; |  0xf3c | Schema_Builtin | Size: 0x4
	m_vecTurningInaccuracyEyeDirLast: 3904n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTurningInaccuracy: 3916n, // float32 m_flTurningInaccuracy; |  0xf4c | Schema_Builtin | Size: 0x4
	m_fAccuracyPenalty: 3920n, // float32 m_fAccuracyPenalty; |  0xf50 | Schema_Builtin | Size: 0x4
	m_flLastAccuracyUpdateTime: 3924n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fAccuracySmoothedForZoom: 3928n, // float32 m_fAccuracySmoothedForZoom; |  0xf58 | Schema_Builtin | Size: 0x4
	m_iRecoilIndex: 3932n, // int32_t m_iRecoilIndex; |  0xf5c | Schema_Builtin | Size: 0x4
	m_flRecoilIndex: 3936n, // float32 m_flRecoilIndex; |  0xf60 | Schema_Builtin | Size: 0x4
	m_bBurstMode: 3940n, // bool m_bBurstMode; |  0xf64 | Schema_Builtin | Size: 0x1
	m_nPostponeFireReadyTicks: 3944n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flPostponeFireReadyFrac: 3948n, // float32 m_flPostponeFireReadyFrac; |  0xf6c | Schema_Builtin | Size: 0x4
	m_bInReload: 3952n, // bool m_bInReload; |  0xf70 | Schema_Builtin | Size: 0x1
	m_flDroppedAtTime: 3956n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsHauledBack: 3960n, // bool m_bIsHauledBack; |  0xf78 | Schema_Builtin | Size: 0x1
	m_bSilencerOn: 3961n, // bool m_bSilencerOn; |  0xf79 | Schema_Builtin | Size: 0x1
	m_flTimeSilencerSwitchComplete: 3964n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iOriginalTeamNumber: 3968n, // int32_t m_iOriginalTeamNumber; |  0xf80 | Schema_Builtin | Size: 0x4
	m_iMostRecentTeamNumber: 3972n, // int32_t m_iMostRecentTeamNumber; |  0xf84 | Schema_Builtin | Size: 0x4
	m_bDroppedNearBuyZone: 3976n, // bool m_bDroppedNearBuyZone; |  0xf88 | Schema_Builtin | Size: 0x1
	m_flNextAttackRenderTimeOffset: 3980n, // float32 m_flNextAttackRenderTimeOffset; |  0xf8c | Schema_Builtin | Size: 0x4
	m_bCanBePickedUp: 4000n, // bool m_bCanBePickedUp; |  0xfa0 | Schema_Builtin | Size: 0x1
	m_bUseCanOverrideNextOwnerTouchTime: 4001n, // bool m_bUseCanOverrideNextOwnerTouchTime; |  0xfa1 | Schema_Builtin | Size: 0x1
	m_nextOwnerTouchTime: 4004n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nextPrevOwnerTouchTime: 4008n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nextPrevOwnerUseTime: 4016n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hPrevOwner: 4020n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nDropTick: 4024n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasActiveWeaponWhenDropped: 4028n, // bool m_bWasActiveWeaponWhenDropped; |  0xfbc | Schema_Builtin | Size: 0x1
	m_donated: 4060n, // bool m_donated; |  0xfdc | Schema_Builtin | Size: 0x1
	m_fLastShotTime: 4064n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasOwnedByCT: 4068n, // bool m_bWasOwnedByCT; |  0xfe4 | Schema_Builtin | Size: 0x1
	m_bWasOwnedByTerrorist: 4069n, // bool m_bWasOwnedByTerrorist; |  0xfe5 | Schema_Builtin | Size: 0x1
	m_numRemoveUnownedWeaponThink: 4072n, // int32_t m_numRemoveUnownedWeaponThink; |  0xfe8 | Schema_Builtin | Size: 0x4
	m_IronSightController: 4080n, // server::CIronSightController  | Schema_DeclaredClass | Size: 0x18
	m_iIronSightMode: 4104n, // int32_t m_iIronSightMode; |  0x1008 | Schema_Builtin | Size: 0x4
	m_flLastLOSTraceFailureTime: 4108n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWatTickOffset: 4112n, // float32 m_flWatTickOffset; |  0x1010 | Schema_Builtin | Size: 0x4
	m_flLastShakeTime: 4128n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
