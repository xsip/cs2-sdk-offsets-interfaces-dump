// generated - do not edit!

import {server_CBasePlayerWeaponVData} from './CBasePlayerWeaponVData';
// Class size: 0x7C0
// BaseClass: : public CS2::server::CBasePlayerWeaponVData
export const server_CCSWeaponBaseVData  = {
	...server_CBasePlayerWeaponVData,
	m_WeaponType: 1088n, // client::CSWeaponType  | Schema_DeclaredEnum | Size: 0x4
	m_WeaponCategory: 1092n, // client::CSWeaponCategory  | Schema_DeclaredEnum | Size: 0x4
	m_szAnimSkeleton: 1096n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeCNmSkeleton>>  | Schema_Atomic | Size: 0xe0
	m_vecMuzzlePos0: 1320n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecMuzzlePos1: 1332n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szTracerParticle: 1344n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>>  | Schema_Atomic | Size: 0xe0
	m_GearSlot: 1568n, // client::gear_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_GearSlotPosition: 1572n, // int32_t m_GearSlotPosition; |  0x624 | Schema_Builtin | Size: 0x4
	m_DefaultLoadoutSlot: 1576n, // client::loadout_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_nPrice: 1580n, // int32_t m_nPrice; |  0x62c | Schema_Builtin | Size: 0x4
	m_nKillAward: 1584n, // int32_t m_nKillAward; |  0x630 | Schema_Builtin | Size: 0x4
	m_nPrimaryReserveAmmoMax: 1588n, // int32_t m_nPrimaryReserveAmmoMax; |  0x634 | Schema_Builtin | Size: 0x4
	m_nSecondaryReserveAmmoMax: 1592n, // int32_t m_nSecondaryReserveAmmoMax; |  0x638 | Schema_Builtin | Size: 0x4
	m_bMeleeWeapon: 1596n, // bool m_bMeleeWeapon; |  0x63c | Schema_Builtin | Size: 0x1
	m_bHasBurstMode: 1597n, // bool m_bHasBurstMode; |  0x63d | Schema_Builtin | Size: 0x1
	m_bIsRevolver: 1598n, // bool m_bIsRevolver; |  0x63e | Schema_Builtin | Size: 0x1
	m_bCannotShootUnderwater: 1599n, // bool m_bCannotShootUnderwater; |  0x63f | Schema_Builtin | Size: 0x1
	m_szName: 1600n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_eSilencerType: 1608n, // client::CSWeaponSilencerType  | Schema_DeclaredEnum | Size: 0x4
	m_nCrosshairMinDistance: 1612n, // int32_t m_nCrosshairMinDistance; |  0x64c | Schema_Builtin | Size: 0x4
	m_nCrosshairDeltaDistance: 1616n, // int32_t m_nCrosshairDeltaDistance; |  0x650 | Schema_Builtin | Size: 0x4
	m_bIsFullAuto: 1620n, // bool m_bIsFullAuto; |  0x654 | Schema_Builtin | Size: 0x1
	m_nNumBullets: 1624n, // int32_t m_nNumBullets; |  0x658 | Schema_Builtin | Size: 0x4
	m_bReloadsSingleShells: 1628n, // bool m_bReloadsSingleShells; |  0x65c | Schema_Builtin | Size: 0x1
	m_flCycleTime: 1632n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flMaxSpeed: 1640n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flSpread: 1648n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyCrouch: 1656n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyStand: 1664n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyJump: 1672n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyLand: 1680n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyLadder: 1688n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyFire: 1696n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyMove: 1704n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilAngle: 1712n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilAngleVariance: 1720n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilMagnitude: 1728n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilMagnitudeVariance: 1736n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_nTracerFrequency: 1744n, // client::CFiringModeInt  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyJumpInitial: 1752n, // float32 m_flInaccuracyJumpInitial; |  0x6d8 | Schema_Builtin | Size: 0x4
	m_flInaccuracyJumpApex: 1756n, // float32 m_flInaccuracyJumpApex; |  0x6dc | Schema_Builtin | Size: 0x4
	m_flInaccuracyReload: 1760n, // float32 m_flInaccuracyReload; |  0x6e0 | Schema_Builtin | Size: 0x4
	m_flDeployDuration: 1764n, // float32 m_flDeployDuration; |  0x6e4 | Schema_Builtin | Size: 0x4
	m_flDisallowAttackAfterReloadStartDuration: 1768n, // float32 m_flDisallowAttackAfterReloadStartDuration; |  0x6e8 | Schema_Builtin | Size: 0x4
	m_nBurstShotCount: 1772n, // int32_t m_nBurstShotCount; |  0x6ec | Schema_Builtin | Size: 0x4
	m_bAllowBurstHolster: 1776n, // bool m_bAllowBurstHolster; |  0x6f0 | Schema_Builtin | Size: 0x1
	m_nRecoilSeed: 1780n, // int32_t m_nRecoilSeed; |  0x6f4 | Schema_Builtin | Size: 0x4
	m_nSpreadSeed: 1784n, // int32_t m_nSpreadSeed; |  0x6f8 | Schema_Builtin | Size: 0x4
	m_flAttackMovespeedFactor: 1788n, // float32 m_flAttackMovespeedFactor; |  0x6fc | Schema_Builtin | Size: 0x4
	m_flInaccuracyPitchShift: 1792n, // float32 m_flInaccuracyPitchShift; |  0x700 | Schema_Builtin | Size: 0x4
	m_flInaccuracyAltSoundThreshold: 1796n, // float32 m_flInaccuracyAltSoundThreshold; |  0x704 | Schema_Builtin | Size: 0x4
	m_szUseRadioSubtitle: 1800n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bUnzoomsAfterShot: 1808n, // bool m_bUnzoomsAfterShot; |  0x710 | Schema_Builtin | Size: 0x1
	m_bHideViewModelWhenZoomed: 1809n, // bool m_bHideViewModelWhenZoomed; |  0x711 | Schema_Builtin | Size: 0x1
	m_nZoomLevels: 1812n, // int32_t m_nZoomLevels; |  0x714 | Schema_Builtin | Size: 0x4
	m_nZoomFOV1: 1816n, // int32_t m_nZoomFOV1; |  0x718 | Schema_Builtin | Size: 0x4
	m_nZoomFOV2: 1820n, // int32_t m_nZoomFOV2; |  0x71c | Schema_Builtin | Size: 0x4
	m_flZoomTime0: 1824n, // float32 m_flZoomTime0; |  0x720 | Schema_Builtin | Size: 0x4
	m_flZoomTime1: 1828n, // float32 m_flZoomTime1; |  0x724 | Schema_Builtin | Size: 0x4
	m_flZoomTime2: 1832n, // float32 m_flZoomTime2; |  0x728 | Schema_Builtin | Size: 0x4
	m_flIronSightPullUpSpeed: 1836n, // float32 m_flIronSightPullUpSpeed; |  0x72c | Schema_Builtin | Size: 0x4
	m_flIronSightPutDownSpeed: 1840n, // float32 m_flIronSightPutDownSpeed; |  0x730 | Schema_Builtin | Size: 0x4
	m_flIronSightFOV: 1844n, // float32 m_flIronSightFOV; |  0x734 | Schema_Builtin | Size: 0x4
	m_flIronSightPivotForward: 1848n, // float32 m_flIronSightPivotForward; |  0x738 | Schema_Builtin | Size: 0x4
	m_flIronSightLooseness: 1852n, // float32 m_flIronSightLooseness; |  0x73c | Schema_Builtin | Size: 0x4
	m_nDamage: 1856n, // int32_t m_nDamage; |  0x740 | Schema_Builtin | Size: 0x4
	m_flHeadshotMultiplier: 1860n, // float32 m_flHeadshotMultiplier; |  0x744 | Schema_Builtin | Size: 0x4
	m_flArmorRatio: 1864n, // float32 m_flArmorRatio; |  0x748 | Schema_Builtin | Size: 0x4
	m_flPenetration: 1868n, // float32 m_flPenetration; |  0x74c | Schema_Builtin | Size: 0x4
	m_flRange: 1872n, // float32 m_flRange; |  0x750 | Schema_Builtin | Size: 0x4
	m_flRangeModifier: 1876n, // float32 m_flRangeModifier; |  0x754 | Schema_Builtin | Size: 0x4
	m_flFlinchVelocityModifierLarge: 1880n, // float32 m_flFlinchVelocityModifierLarge; |  0x758 | Schema_Builtin | Size: 0x4
	m_flFlinchVelocityModifierSmall: 1884n, // float32 m_flFlinchVelocityModifierSmall; |  0x75c | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeCrouch: 1888n, // float32 m_flRecoveryTimeCrouch; |  0x760 | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeStand: 1892n, // float32 m_flRecoveryTimeStand; |  0x764 | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeCrouchFinal: 1896n, // float32 m_flRecoveryTimeCrouchFinal; |  0x768 | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeStandFinal: 1900n, // float32 m_flRecoveryTimeStandFinal; |  0x76c | Schema_Builtin | Size: 0x4
	m_nRecoveryTransitionStartBullet: 1904n, // int32_t m_nRecoveryTransitionStartBullet; |  0x770 | Schema_Builtin | Size: 0x4
	m_nRecoveryTransitionEndBullet: 1908n, // int32_t m_nRecoveryTransitionEndBullet; |  0x774 | Schema_Builtin | Size: 0x4
	m_flThrowVelocity: 1912n, // float32 m_flThrowVelocity; |  0x778 | Schema_Builtin | Size: 0x4
	m_vSmokeColor: 1916n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szAnimClass: 1928n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
}
