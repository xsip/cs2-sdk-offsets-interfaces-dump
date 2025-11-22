// generated - do not edit!

import {client_CBasePlayerWeaponVData} from './CBasePlayerWeaponVData';
// Class size: 0x8A0
// BaseClass: : public CS2::client::CBasePlayerWeaponVData
export const client_CCSWeaponBaseVData  = {
	...client_CBasePlayerWeaponVData,
	m_WeaponType: 1088n, // client::CSWeaponType  | Schema_DeclaredEnum | Size: 0x4
	m_WeaponCategory: 1092n, // client::CSWeaponCategory  | Schema_DeclaredEnum | Size: 0x4
	m_szModel_AG2: 1096n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeCModel>>  | Schema_Atomic | Size: 0xe0
	m_szAnimSkeleton: 1320n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeCNmSkeleton>>  | Schema_Atomic | Size: 0xe0
	m_vecMuzzlePos0: 1544n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecMuzzlePos1: 1556n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szTracerParticle: 1568n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>>  | Schema_Atomic | Size: 0xe0
	m_GearSlot: 1792n, // client::gear_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_GearSlotPosition: 1796n, // int32_t m_GearSlotPosition; |  0x704 | Schema_Builtin | Size: 0x4
	m_DefaultLoadoutSlot: 1800n, // client::loadout_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_nPrice: 1804n, // int32_t m_nPrice; |  0x70c | Schema_Builtin | Size: 0x4
	m_nKillAward: 1808n, // int32_t m_nKillAward; |  0x710 | Schema_Builtin | Size: 0x4
	m_nPrimaryReserveAmmoMax: 1812n, // int32_t m_nPrimaryReserveAmmoMax; |  0x714 | Schema_Builtin | Size: 0x4
	m_nSecondaryReserveAmmoMax: 1816n, // int32_t m_nSecondaryReserveAmmoMax; |  0x718 | Schema_Builtin | Size: 0x4
	m_bMeleeWeapon: 1820n, // bool m_bMeleeWeapon; |  0x71c | Schema_Builtin | Size: 0x1
	m_bHasBurstMode: 1821n, // bool m_bHasBurstMode; |  0x71d | Schema_Builtin | Size: 0x1
	m_bIsRevolver: 1822n, // bool m_bIsRevolver; |  0x71e | Schema_Builtin | Size: 0x1
	m_bCannotShootUnderwater: 1823n, // bool m_bCannotShootUnderwater; |  0x71f | Schema_Builtin | Size: 0x1
	m_szName: 1824n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_eSilencerType: 1832n, // client::CSWeaponSilencerType  | Schema_DeclaredEnum | Size: 0x4
	m_nCrosshairMinDistance: 1836n, // int32_t m_nCrosshairMinDistance; |  0x72c | Schema_Builtin | Size: 0x4
	m_nCrosshairDeltaDistance: 1840n, // int32_t m_nCrosshairDeltaDistance; |  0x730 | Schema_Builtin | Size: 0x4
	m_bIsFullAuto: 1844n, // bool m_bIsFullAuto; |  0x734 | Schema_Builtin | Size: 0x1
	m_nNumBullets: 1848n, // int32_t m_nNumBullets; |  0x738 | Schema_Builtin | Size: 0x4
	m_bReloadsSingleShells: 1852n, // bool m_bReloadsSingleShells; |  0x73c | Schema_Builtin | Size: 0x1
	m_flCycleTime: 1856n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flMaxSpeed: 1864n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flSpread: 1872n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyCrouch: 1880n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyStand: 1888n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyJump: 1896n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyLand: 1904n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyLadder: 1912n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyFire: 1920n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyMove: 1928n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilAngle: 1936n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilAngleVariance: 1944n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilMagnitude: 1952n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_flRecoilMagnitudeVariance: 1960n, // client::CFiringModeFloat  | Schema_DeclaredClass | Size: 0x8
	m_nTracerFrequency: 1968n, // client::CFiringModeInt  | Schema_DeclaredClass | Size: 0x8
	m_flInaccuracyJumpInitial: 1976n, // float32 m_flInaccuracyJumpInitial; |  0x7b8 | Schema_Builtin | Size: 0x4
	m_flInaccuracyJumpApex: 1980n, // float32 m_flInaccuracyJumpApex; |  0x7bc | Schema_Builtin | Size: 0x4
	m_flInaccuracyReload: 1984n, // float32 m_flInaccuracyReload; |  0x7c0 | Schema_Builtin | Size: 0x4
	m_flDeployDuration: 1988n, // float32 m_flDeployDuration; |  0x7c4 | Schema_Builtin | Size: 0x4
	m_flDisallowAttackAfterReloadStartDuration: 1992n, // float32 m_flDisallowAttackAfterReloadStartDuration; |  0x7c8 | Schema_Builtin | Size: 0x4
	m_nBurstShotCount: 1996n, // int32_t m_nBurstShotCount; |  0x7cc | Schema_Builtin | Size: 0x4
	m_bAllowBurstHolster: 2000n, // bool m_bAllowBurstHolster; |  0x7d0 | Schema_Builtin | Size: 0x1
	m_nRecoilSeed: 2004n, // int32_t m_nRecoilSeed; |  0x7d4 | Schema_Builtin | Size: 0x4
	m_nSpreadSeed: 2008n, // int32_t m_nSpreadSeed; |  0x7d8 | Schema_Builtin | Size: 0x4
	m_flAttackMovespeedFactor: 2012n, // float32 m_flAttackMovespeedFactor; |  0x7dc | Schema_Builtin | Size: 0x4
	m_flInaccuracyPitchShift: 2016n, // float32 m_flInaccuracyPitchShift; |  0x7e0 | Schema_Builtin | Size: 0x4
	m_flInaccuracyAltSoundThreshold: 2020n, // float32 m_flInaccuracyAltSoundThreshold; |  0x7e4 | Schema_Builtin | Size: 0x4
	m_szUseRadioSubtitle: 2024n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bUnzoomsAfterShot: 2032n, // bool m_bUnzoomsAfterShot; |  0x7f0 | Schema_Builtin | Size: 0x1
	m_bHideViewModelWhenZoomed: 2033n, // bool m_bHideViewModelWhenZoomed; |  0x7f1 | Schema_Builtin | Size: 0x1
	m_nZoomLevels: 2036n, // int32_t m_nZoomLevels; |  0x7f4 | Schema_Builtin | Size: 0x4
	m_nZoomFOV1: 2040n, // int32_t m_nZoomFOV1; |  0x7f8 | Schema_Builtin | Size: 0x4
	m_nZoomFOV2: 2044n, // int32_t m_nZoomFOV2; |  0x7fc | Schema_Builtin | Size: 0x4
	m_flZoomTime0: 2048n, // float32 m_flZoomTime0; |  0x800 | Schema_Builtin | Size: 0x4
	m_flZoomTime1: 2052n, // float32 m_flZoomTime1; |  0x804 | Schema_Builtin | Size: 0x4
	m_flZoomTime2: 2056n, // float32 m_flZoomTime2; |  0x808 | Schema_Builtin | Size: 0x4
	m_flIronSightPullUpSpeed: 2060n, // float32 m_flIronSightPullUpSpeed; |  0x80c | Schema_Builtin | Size: 0x4
	m_flIronSightPutDownSpeed: 2064n, // float32 m_flIronSightPutDownSpeed; |  0x810 | Schema_Builtin | Size: 0x4
	m_flIronSightFOV: 2068n, // float32 m_flIronSightFOV; |  0x814 | Schema_Builtin | Size: 0x4
	m_flIronSightPivotForward: 2072n, // float32 m_flIronSightPivotForward; |  0x818 | Schema_Builtin | Size: 0x4
	m_flIronSightLooseness: 2076n, // float32 m_flIronSightLooseness; |  0x81c | Schema_Builtin | Size: 0x4
	m_nDamage: 2080n, // int32_t m_nDamage; |  0x820 | Schema_Builtin | Size: 0x4
	m_flHeadshotMultiplier: 2084n, // float32 m_flHeadshotMultiplier; |  0x824 | Schema_Builtin | Size: 0x4
	m_flArmorRatio: 2088n, // float32 m_flArmorRatio; |  0x828 | Schema_Builtin | Size: 0x4
	m_flPenetration: 2092n, // float32 m_flPenetration; |  0x82c | Schema_Builtin | Size: 0x4
	m_flRange: 2096n, // float32 m_flRange; |  0x830 | Schema_Builtin | Size: 0x4
	m_flRangeModifier: 2100n, // float32 m_flRangeModifier; |  0x834 | Schema_Builtin | Size: 0x4
	m_flFlinchVelocityModifierLarge: 2104n, // float32 m_flFlinchVelocityModifierLarge; |  0x838 | Schema_Builtin | Size: 0x4
	m_flFlinchVelocityModifierSmall: 2108n, // float32 m_flFlinchVelocityModifierSmall; |  0x83c | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeCrouch: 2112n, // float32 m_flRecoveryTimeCrouch; |  0x840 | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeStand: 2116n, // float32 m_flRecoveryTimeStand; |  0x844 | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeCrouchFinal: 2120n, // float32 m_flRecoveryTimeCrouchFinal; |  0x848 | Schema_Builtin | Size: 0x4
	m_flRecoveryTimeStandFinal: 2124n, // float32 m_flRecoveryTimeStandFinal; |  0x84c | Schema_Builtin | Size: 0x4
	m_nRecoveryTransitionStartBullet: 2128n, // int32_t m_nRecoveryTransitionStartBullet; |  0x850 | Schema_Builtin | Size: 0x4
	m_nRecoveryTransitionEndBullet: 2132n, // int32_t m_nRecoveryTransitionEndBullet; |  0x854 | Schema_Builtin | Size: 0x4
	m_flThrowVelocity: 2136n, // float32 m_flThrowVelocity; |  0x858 | Schema_Builtin | Size: 0x4
	m_vSmokeColor: 2140n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szAnimClass: 2152n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
}
