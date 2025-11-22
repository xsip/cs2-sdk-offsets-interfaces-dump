// generated - do not edit!

import {client_C_BasePlayerWeapon} from './C_BasePlayerWeapon';
// Class size: 0x1F80
// BaseClass: : public CS2::client::C_BasePlayerWeapon
export const client_C_CSWeaponBase  = {
	...client_C_BasePlayerWeapon,
	m_iWeaponGameplayAnimState: 6512n, // client::WeaponGameplayAnimState  | Schema_DeclaredEnum | Size: 0x2
	m_flWeaponGameplayAnimStateTimestamp: 6516n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flInspectCancelCompleteTime: 6520n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInspectPending: 6524n, // bool m_bInspectPending; |  0x197c | Schema_Builtin | Size: 0x1
	m_bInspectShouldLoop: 6525n, // bool m_bInspectShouldLoop; |  0x197d | Schema_Builtin | Size: 0x1
	m_flCrosshairDistance: 6568n, // float32 m_flCrosshairDistance; |  0x19a8 | Schema_Builtin | Size: 0x4
	m_iAmmoLastCheck: 6572n, // int32_t m_iAmmoLastCheck; |  0x19ac | Schema_Builtin | Size: 0x4
	m_nLastEmptySoundCmdNum: 6576n, // int32_t m_nLastEmptySoundCmdNum; |  0x19b0 | Schema_Builtin | Size: 0x4
	m_bFireOnEmpty: 6580n, // bool m_bFireOnEmpty; |  0x19b4 | Schema_Builtin | Size: 0x1
	m_OnPlayerPickup: 6584n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_weaponMode: 6624n, // client::CSWeaponMode  | Schema_DeclaredEnum | Size: 0x4
	m_flTurningInaccuracyDelta: 6628n, // float32 m_flTurningInaccuracyDelta; |  0x19e4 | Schema_Builtin | Size: 0x4
	m_vecTurningInaccuracyEyeDirLast: 6632n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTurningInaccuracy: 6644n, // float32 m_flTurningInaccuracy; |  0x19f4 | Schema_Builtin | Size: 0x4
	m_fAccuracyPenalty: 6648n, // float32 m_fAccuracyPenalty; |  0x19f8 | Schema_Builtin | Size: 0x4
	m_flLastAccuracyUpdateTime: 6652n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fAccuracySmoothedForZoom: 6656n, // float32 m_fAccuracySmoothedForZoom; |  0x1a00 | Schema_Builtin | Size: 0x4
	m_iRecoilIndex: 6660n, // int32_t m_iRecoilIndex; |  0x1a04 | Schema_Builtin | Size: 0x4
	m_flRecoilIndex: 6664n, // float32 m_flRecoilIndex; |  0x1a08 | Schema_Builtin | Size: 0x4
	m_bBurstMode: 6668n, // bool m_bBurstMode; |  0x1a0c | Schema_Builtin | Size: 0x1
	m_flLastBurstModeChangeTime: 6672n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nPostponeFireReadyTicks: 6676n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flPostponeFireReadyFrac: 6680n, // float32 m_flPostponeFireReadyFrac; |  0x1a18 | Schema_Builtin | Size: 0x4
	m_bInReload: 6684n, // bool m_bInReload; |  0x1a1c | Schema_Builtin | Size: 0x1
	m_flDroppedAtTime: 6688n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsHauledBack: 6692n, // bool m_bIsHauledBack; |  0x1a24 | Schema_Builtin | Size: 0x1
	m_bSilencerOn: 6693n, // bool m_bSilencerOn; |  0x1a25 | Schema_Builtin | Size: 0x1
	m_flTimeSilencerSwitchComplete: 6696n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iOriginalTeamNumber: 6700n, // int32_t m_iOriginalTeamNumber; |  0x1a2c | Schema_Builtin | Size: 0x4
	m_iMostRecentTeamNumber: 6704n, // int32_t m_iMostRecentTeamNumber; |  0x1a30 | Schema_Builtin | Size: 0x4
	m_bDroppedNearBuyZone: 6708n, // bool m_bDroppedNearBuyZone; |  0x1a34 | Schema_Builtin | Size: 0x1
	m_flNextAttackRenderTimeOffset: 6712n, // float32 m_flNextAttackRenderTimeOffset; |  0x1a38 | Schema_Builtin | Size: 0x4
	m_bClearWeaponIdentifyingUGC: 6872n, // bool m_bClearWeaponIdentifyingUGC; |  0x1ad8 | Schema_Builtin | Size: 0x1
	m_bVisualsDataSet: 6873n, // bool m_bVisualsDataSet; |  0x1ad9 | Schema_Builtin | Size: 0x1
	m_bUIWeapon: 6874n, // bool m_bUIWeapon; |  0x1ada | Schema_Builtin | Size: 0x1
	m_nCustomEconReloadEventId: 6876n, // int32_t m_nCustomEconReloadEventId; |  0x1adc | Schema_Builtin | Size: 0x4
	m_nextPrevOwnerUseTime: 6888n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hPrevOwner: 6892n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nDropTick: 6896n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasActiveWeaponWhenDropped: 6900n, // bool m_bWasActiveWeaponWhenDropped; |  0x1af4 | Schema_Builtin | Size: 0x1
	m_donated: 6932n, // bool m_donated; |  0x1b14 | Schema_Builtin | Size: 0x1
	m_fLastShotTime: 6936n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasOwnedByCT: 6940n, // bool m_bWasOwnedByCT; |  0x1b1c | Schema_Builtin | Size: 0x1
	m_bWasOwnedByTerrorist: 6941n, // bool m_bWasOwnedByTerrorist; |  0x1b1d | Schema_Builtin | Size: 0x1
	m_flNextClientFireBulletTime: 6944n, // float32 m_flNextClientFireBulletTime; |  0x1b20 | Schema_Builtin | Size: 0x4
	m_flNextClientFireBulletTime_Repredict: 6948n, // float32 m_flNextClientFireBulletTime_Repredict; |  0x1b24 | Schema_Builtin | Size: 0x4
	m_IronSightController: 7312n, // client::C_IronSightController  | Schema_DeclaredClass | Size: 0xb0
	m_iIronSightMode: 7488n, // int32_t m_iIronSightMode; |  0x1d40 | Schema_Builtin | Size: 0x4
	m_flLastLOSTraceFailureTime: 7512n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWatTickOffset: 7608n, // float32 m_flWatTickOffset; |  0x1db8 | Schema_Builtin | Size: 0x4
	m_flLastShakeTime: 7628n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
