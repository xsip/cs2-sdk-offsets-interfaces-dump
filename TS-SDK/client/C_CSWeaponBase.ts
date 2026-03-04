// generated - do not edit!

import {client_C_BasePlayerWeapon} from './C_BasePlayerWeapon';
// Class size: 0x1F40
// BaseClass: : public CS2::client::C_BasePlayerWeapon
export const client_C_CSWeaponBase  = {
	...client_C_BasePlayerWeapon,
	m_iWeaponGameplayAnimState: 6472n, // client::WeaponGameplayAnimState  | Schema_DeclaredEnum | Size: 0x2
	m_flWeaponGameplayAnimStateTimestamp: 6476n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flInspectCancelCompleteTime: 6480n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInspectPending: 6484n, // bool m_bInspectPending; |  0x1954 | Schema_Builtin | Size: 0x1
	m_bInspectShouldLoop: 6485n, // bool m_bInspectShouldLoop; |  0x1955 | Schema_Builtin | Size: 0x1
	m_flCrosshairDistance: 6528n, // float32 m_flCrosshairDistance; |  0x1980 | Schema_Builtin | Size: 0x4
	m_iAmmoLastCheck: 6532n, // int32_t m_iAmmoLastCheck; |  0x1984 | Schema_Builtin | Size: 0x4
	m_nLastEmptySoundCmdNum: 6536n, // int32_t m_nLastEmptySoundCmdNum; |  0x1988 | Schema_Builtin | Size: 0x4
	m_bFireOnEmpty: 6540n, // bool m_bFireOnEmpty; |  0x198c | Schema_Builtin | Size: 0x1
	m_OnPlayerPickup: 6544n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_weaponMode: 6568n, // client::CSWeaponMode  | Schema_DeclaredEnum | Size: 0x4
	m_flTurningInaccuracyDelta: 6572n, // float32 m_flTurningInaccuracyDelta; |  0x19ac | Schema_Builtin | Size: 0x4
	m_vecTurningInaccuracyEyeDirLast: 6576n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTurningInaccuracy: 6588n, // float32 m_flTurningInaccuracy; |  0x19bc | Schema_Builtin | Size: 0x4
	m_fAccuracyPenalty: 6592n, // float32 m_fAccuracyPenalty; |  0x19c0 | Schema_Builtin | Size: 0x4
	m_flLastAccuracyUpdateTime: 6596n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fAccuracySmoothedForZoom: 6600n, // float32 m_fAccuracySmoothedForZoom; |  0x19c8 | Schema_Builtin | Size: 0x4
	m_iRecoilIndex: 6604n, // int32_t m_iRecoilIndex; |  0x19cc | Schema_Builtin | Size: 0x4
	m_flRecoilIndex: 6608n, // float32 m_flRecoilIndex; |  0x19d0 | Schema_Builtin | Size: 0x4
	m_bBurstMode: 6612n, // bool m_bBurstMode; |  0x19d4 | Schema_Builtin | Size: 0x1
	m_flLastBurstModeChangeTime: 6616n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nPostponeFireReadyTicks: 6620n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_flPostponeFireReadyFrac: 6624n, // float32 m_flPostponeFireReadyFrac; |  0x19e0 | Schema_Builtin | Size: 0x4
	m_bInReload: 6628n, // bool m_bInReload; |  0x19e4 | Schema_Builtin | Size: 0x1
	m_flDroppedAtTime: 6632n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsHauledBack: 6636n, // bool m_bIsHauledBack; |  0x19ec | Schema_Builtin | Size: 0x1
	m_bSilencerOn: 6637n, // bool m_bSilencerOn; |  0x19ed | Schema_Builtin | Size: 0x1
	m_flTimeSilencerSwitchComplete: 6640n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWeaponActionPlaybackRate: 6644n, // float32 m_flWeaponActionPlaybackRate; |  0x19f4 | Schema_Builtin | Size: 0x4
	m_iOriginalTeamNumber: 6648n, // int32_t m_iOriginalTeamNumber; |  0x19f8 | Schema_Builtin | Size: 0x4
	m_iMostRecentTeamNumber: 6652n, // int32_t m_iMostRecentTeamNumber; |  0x19fc | Schema_Builtin | Size: 0x4
	m_bDroppedNearBuyZone: 6656n, // bool m_bDroppedNearBuyZone; |  0x1a00 | Schema_Builtin | Size: 0x1
	m_flNextAttackRenderTimeOffset: 6660n, // float32 m_flNextAttackRenderTimeOffset; |  0x1a04 | Schema_Builtin | Size: 0x4
	m_bClearWeaponIdentifyingUGC: 6816n, // bool m_bClearWeaponIdentifyingUGC; |  0x1aa0 | Schema_Builtin | Size: 0x1
	m_bVisualsDataSet: 6817n, // bool m_bVisualsDataSet; |  0x1aa1 | Schema_Builtin | Size: 0x1
	m_bUIWeapon: 6818n, // bool m_bUIWeapon; |  0x1aa2 | Schema_Builtin | Size: 0x1
	m_nCustomEconReloadEventId: 6820n, // int32_t m_nCustomEconReloadEventId; |  0x1aa4 | Schema_Builtin | Size: 0x4
	m_nextPrevOwnerUseTime: 6832n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hPrevOwner: 6836n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nDropTick: 6840n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasActiveWeaponWhenDropped: 6844n, // bool m_bWasActiveWeaponWhenDropped; |  0x1abc | Schema_Builtin | Size: 0x1
	m_donated: 6876n, // bool m_donated; |  0x1adc | Schema_Builtin | Size: 0x1
	m_fLastShotTime: 6880n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bWasOwnedByCT: 6884n, // bool m_bWasOwnedByCT; |  0x1ae4 | Schema_Builtin | Size: 0x1
	m_bWasOwnedByTerrorist: 6885n, // bool m_bWasOwnedByTerrorist; |  0x1ae5 | Schema_Builtin | Size: 0x1
	m_flNextClientFireBulletTime: 6888n, // float32 m_flNextClientFireBulletTime; |  0x1ae8 | Schema_Builtin | Size: 0x4
	m_flNextClientFireBulletTime_Repredict: 6892n, // float32 m_flNextClientFireBulletTime_Repredict; |  0x1aec | Schema_Builtin | Size: 0x4
	m_IronSightController: 7248n, // client::C_IronSightController  | Schema_DeclaredClass | Size: 0xb0
	m_iIronSightMode: 7424n, // int32_t m_iIronSightMode; |  0x1d00 | Schema_Builtin | Size: 0x4
	m_flLastLOSTraceFailureTime: 7448n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWatTickOffset: 7544n, // float32 m_flWatTickOffset; |  0x1d78 | Schema_Builtin | Size: 0x4
	m_flLastShakeTime: 7564n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
