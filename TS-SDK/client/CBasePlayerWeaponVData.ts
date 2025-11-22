// generated - do not edit!

import {client_CEntitySubclassVDataBase} from './CEntitySubclassVDataBase';
// Class size: 0x440
// BaseClass: : public CS2::client::CEntitySubclassVDataBase
export const client_CBasePlayerWeaponVData  = {
	...client_CEntitySubclassVDataBase,
	m_szWorldModel: 40n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeCModel>>  | Schema_Atomic | Size: 0xe0
	m_sToolsOnlyOwnerModelName: 264n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeCModel>>  | Schema_Atomic | Size: 0xe0
	m_bBuiltRightHanded: 488n, // bool m_bBuiltRightHanded; |  0x1e8 | Schema_Builtin | Size: 0x1
	m_bAllowFlipping: 489n, // bool m_bAllowFlipping; |  0x1e9 | Schema_Builtin | Size: 0x1
	m_sMuzzleAttachment: 496n, // GlobalTypes::CAttachmentNameSymbolWithStorage  | Schema_Atomic | Size: 0x20
	m_szMuzzleFlashParticle: 528n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>>  | Schema_Atomic | Size: 0xe0
	m_szMuzzleFlashParticleConfig: 752n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szBarrelSmokeParticle: 760n, // GlobalTypes::CResourceNameTyped<GlobalTypes::CWeakHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>>  | Schema_Atomic | Size: 0xe0
	m_nMuzzleSmokeShotThreshold: 984n, // uint8_t m_nMuzzleSmokeShotThreshold; |  0x3d8 | Schema_Builtin | Size: 0x1
	m_flMuzzleSmokeTimeout: 988n, // float32 m_flMuzzleSmokeTimeout; |  0x3dc | Schema_Builtin | Size: 0x4
	m_flMuzzleSmokeDecrementRate: 992n, // float32 m_flMuzzleSmokeDecrementRate; |  0x3e0 | Schema_Builtin | Size: 0x4
	m_bLinkedCooldowns: 996n, // bool m_bLinkedCooldowns; |  0x3e4 | Schema_Builtin | Size: 0x1
	m_iFlags: 997n, // client::ItemFlagTypes_t  | Schema_DeclaredEnum | Size: 0x1
	m_nPrimaryAmmoType: 998n, // client::AmmoIndex_t  | Schema_DeclaredClass | Size: 0x1
	m_nSecondaryAmmoType: 999n, // client::AmmoIndex_t  | Schema_DeclaredClass | Size: 0x1
	m_iMaxClip1: 1000n, // int32_t m_iMaxClip1; |  0x3e8 | Schema_Builtin | Size: 0x4
	m_iMaxClip2: 1004n, // int32_t m_iMaxClip2; |  0x3ec | Schema_Builtin | Size: 0x4
	m_iDefaultClip1: 1008n, // int32_t m_iDefaultClip1; |  0x3f0 | Schema_Builtin | Size: 0x4
	m_iDefaultClip2: 1012n, // int32_t m_iDefaultClip2; |  0x3f4 | Schema_Builtin | Size: 0x4
	m_bReserveAmmoAsClips: 1016n, // bool m_bReserveAmmoAsClips; |  0x3f8 | Schema_Builtin | Size: 0x1
	m_bTreatAsSingleClip: 1017n, // bool m_bTreatAsSingleClip; |  0x3f9 | Schema_Builtin | Size: 0x1
	m_bKeepLoadedAmmo: 1018n, // bool m_bKeepLoadedAmmo; |  0x3fa | Schema_Builtin | Size: 0x1
	m_iWeight: 1020n, // int32_t m_iWeight; |  0x3fc | Schema_Builtin | Size: 0x4
	m_bAutoSwitchTo: 1024n, // bool m_bAutoSwitchTo; |  0x400 | Schema_Builtin | Size: 0x1
	m_bAutoSwitchFrom: 1025n, // bool m_bAutoSwitchFrom; |  0x401 | Schema_Builtin | Size: 0x1
	m_iRumbleEffect: 1028n, // client::RumbleEffect_t  | Schema_DeclaredEnum | Size: 0x4
	m_flDropSpeed: 1032n, // float32 m_flDropSpeed; |  0x408 | Schema_Builtin | Size: 0x4
	m_iSlot: 1036n, // int32_t m_iSlot; |  0x40c | Schema_Builtin | Size: 0x4
	m_iPosition: 1040n, // int32_t m_iPosition; |  0x410 | Schema_Builtin | Size: 0x4
	m_aShootSounds: 1048n, // GlobalTypes::CUtlOrderedMap  | Schema_Atomic | Size: 0x28
}
