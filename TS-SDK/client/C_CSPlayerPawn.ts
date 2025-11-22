// generated - do not edit!

import {client_C_CSPlayerPawnBase} from './C_CSPlayerPawnBase';
// Class size: 0x3F10
// BaseClass: : public CS2::client::C_CSPlayerPawnBase
export const client_C_CSPlayerPawn  = {
	...client_C_CSPlayerPawnBase,
	m_pBulletServices: 5752n, // client::CCSPlayer_BulletServices**  | Schema_Ptr | Size: 0x8
	m_pHostageServices: 5760n, // client::CCSPlayer_HostageServices**  | Schema_Ptr | Size: 0x8
	m_pBuyServices: 5768n, // client::CCSPlayer_BuyServices**  | Schema_Ptr | Size: 0x8
	m_pGlowServices: 5776n, // client::CCSPlayer_GlowServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 5784n, // client::CCSPlayer_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pDamageReactServices: 5792n, // client::CCSPlayer_DamageReactServices**  | Schema_Ptr | Size: 0x8
	m_flHealthShotBoostExpirationTime: 5800n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastFiredWeaponTime: 5804n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bHasFemaleVoice: 5808n, // bool m_bHasFemaleVoice; |  0x16b0 | Schema_Builtin | Size: 0x1
	m_flLandingTimeSeconds: 5812n, // float32 m_flLandingTimeSeconds; |  0x16b4 | Schema_Builtin | Size: 0x4
	m_flOldFallVelocity: 5816n, // float32 m_flOldFallVelocity; |  0x16b8 | Schema_Builtin | Size: 0x4
	m_szLastPlaceName: 5820n, // char m_szLastPlaceName[18]; |  0x16bc | Schema_FixedArray | Size: 0x12
	m_bPrevDefuser: 5838n, // bool m_bPrevDefuser; |  0x16ce | Schema_Builtin | Size: 0x1
	m_bPrevHelmet: 5839n, // bool m_bPrevHelmet; |  0x16cf | Schema_Builtin | Size: 0x1
	m_nPrevArmorVal: 5840n, // int32_t m_nPrevArmorVal; |  0x16d0 | Schema_Builtin | Size: 0x4
	m_nPrevGrenadeAmmoCount: 5844n, // int32_t m_nPrevGrenadeAmmoCount; |  0x16d4 | Schema_Builtin | Size: 0x4
	m_unPreviousWeaponHash: 5848n, // uint32_t m_unPreviousWeaponHash; |  0x16d8 | Schema_Builtin | Size: 0x4
	m_unWeaponHash: 5852n, // uint32_t m_unWeaponHash; |  0x16dc | Schema_Builtin | Size: 0x4
	m_bInBuyZone: 5856n, // bool m_bInBuyZone; |  0x16e0 | Schema_Builtin | Size: 0x1
	m_bPreviouslyInBuyZone: 5857n, // bool m_bPreviouslyInBuyZone; |  0x16e1 | Schema_Builtin | Size: 0x1
	m_aimPunchAngle: 5860n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchAngleVel: 5872n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchTickBase: 5884n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_aimPunchTickFraction: 5888n, // float32 m_aimPunchTickFraction; |  0x1700 | Schema_Builtin | Size: 0x4
	m_aimPunchCache: 5896n, // GlobalTypes::CUtlVector<GlobalTypes::QAngle>  | Schema_Atomic | Size: 0x18
	m_bInLanding: 5928n, // bool m_bInLanding; |  0x1728 | Schema_Builtin | Size: 0x1
	m_flLandingStartTime: 5932n, // float32 m_flLandingStartTime; |  0x172c | Schema_Builtin | Size: 0x4
	m_bInHostageRescueZone: 5936n, // bool m_bInHostageRescueZone; |  0x1730 | Schema_Builtin | Size: 0x1
	m_bInBombZone: 5937n, // bool m_bInBombZone; |  0x1731 | Schema_Builtin | Size: 0x1
	m_bIsBuyMenuOpen: 5938n, // bool m_bIsBuyMenuOpen; |  0x1732 | Schema_Builtin | Size: 0x1
	m_flTimeOfLastInjury: 5940n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextSprayDecalTime: 5944n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iRetakesOffering: 6288n, // int32_t m_iRetakesOffering; |  0x1890 | Schema_Builtin | Size: 0x4
	m_iRetakesOfferingCard: 6292n, // int32_t m_iRetakesOfferingCard; |  0x1894 | Schema_Builtin | Size: 0x4
	m_bRetakesHasDefuseKit: 6296n, // bool m_bRetakesHasDefuseKit; |  0x1898 | Schema_Builtin | Size: 0x1
	m_bRetakesMVPLastRound: 6297n, // bool m_bRetakesMVPLastRound; |  0x1899 | Schema_Builtin | Size: 0x1
	m_iRetakesMVPBoostItem: 6300n, // int32_t m_iRetakesMVPBoostItem; |  0x189c | Schema_Builtin | Size: 0x4
	m_RetakesMVPBoostExtraUtility: 6304n, // client::loadout_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_bNeedToReApplyGloves: 6309n, // bool m_bNeedToReApplyGloves; |  0x18a5 | Schema_Builtin | Size: 0x1
	m_EconGloves: 6312n, // client::C_EconItemView  | Schema_DeclaredClass | Size: 0x478
	m_nEconGlovesChanged: 7456n, // uint8_t m_nEconGlovesChanged; |  0x1d20 | Schema_Builtin | Size: 0x1
	m_bMustSyncRagdollState: 7457n, // bool m_bMustSyncRagdollState; |  0x1d21 | Schema_Builtin | Size: 0x1
	m_nRagdollDamageBone: 7460n, // int32_t m_nRagdollDamageBone; |  0x1d24 | Schema_Builtin | Size: 0x4
	m_vRagdollDamageForce: 7464n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vRagdollDamagePosition: 7476n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szRagdollDamageWeaponName: 7488n, // char m_szRagdollDamageWeaponName[64]; |  0x1d40 | Schema_FixedArray | Size: 0x40
	m_bRagdollDamageHeadshot: 7552n, // bool m_bRagdollDamageHeadshot; |  0x1d80 | Schema_Builtin | Size: 0x1
	m_vRagdollServerOrigin: 7556n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastLandTime: 9216n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bOnGroundLastTick: 9220n, // bool m_bOnGroundLastTick; |  0x2404 | Schema_Builtin | Size: 0x1
	m_hHudModelArms: 9248n, // GlobalTypes::CHandle<client::C_CS2HudModelArms>  | Schema_Atomic | Size: 0x4
	m_qDeathEyeAngles: 9252n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bSkipOneHeadConstraintUpdate: 9264n, // bool m_bSkipOneHeadConstraintUpdate; |  0x2430 | Schema_Builtin | Size: 0x1
	m_bLeftHanded: 9265n, // bool m_bLeftHanded; |  0x2431 | Schema_Builtin | Size: 0x1
	m_fSwitchedHandednessTime: 9268n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flViewmodelOffsetX: 9272n, // float32 m_flViewmodelOffsetX; |  0x2438 | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetY: 9276n, // float32 m_flViewmodelOffsetY; |  0x243c | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetZ: 9280n, // float32 m_flViewmodelOffsetZ; |  0x2440 | Schema_Builtin | Size: 0x4
	m_flViewmodelFOV: 9284n, // float32 m_flViewmodelFOV; |  0x2444 | Schema_Builtin | Size: 0x4
	m_vecPlayerPatchEconIndices: 9288n, // uint32_t m_vecPlayerPatchEconIndices[5]; |  0x2448 | Schema_FixedArray | Size: 0x14
	m_GunGameImmunityColor: 9344n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_vecBulletHitModels: 9424n, // GlobalTypes::CUtlVector<client::C_BulletHitModel*>  | Schema_Atomic | Size: 0x18
	m_bIsWalking: 9448n, // bool m_bIsWalking; |  0x24e8 | Schema_Builtin | Size: 0x1
	m_thirdPersonHeading: 9456n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flSlopeDropOffset: 9600n, // float32 m_flSlopeDropOffset; |  0x2580 | Schema_Builtin | Size: 0x4
	m_flSlopeDropHeight: 9720n, // float32 m_flSlopeDropHeight; |  0x25f8 | Schema_Builtin | Size: 0x4
	m_vHeadConstraintOffset: 9840n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_entitySpottedState: 9984n, // client::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_bIsScoped: 10008n, // bool m_bIsScoped; |  0x2718 | Schema_Builtin | Size: 0x1
	m_bResumeZoom: 10009n, // bool m_bResumeZoom; |  0x2719 | Schema_Builtin | Size: 0x1
	m_bIsDefusing: 10010n, // bool m_bIsDefusing; |  0x271a | Schema_Builtin | Size: 0x1
	m_bIsGrabbingHostage: 10011n, // bool m_bIsGrabbingHostage; |  0x271b | Schema_Builtin | Size: 0x1
	m_iBlockingUseActionInProgress: 10012n, // client::CSPlayerBlockingUseAction_t  | Schema_DeclaredEnum | Size: 0x4
	m_flEmitSoundTime: 10016n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInNoDefuseArea: 10020n, // bool m_bInNoDefuseArea; |  0x2724 | Schema_Builtin | Size: 0x1
	m_nWhichBombZone: 10024n, // int32_t m_nWhichBombZone; |  0x2728 | Schema_Builtin | Size: 0x4
	m_iShotsFired: 10028n, // int32_t m_iShotsFired; |  0x272c | Schema_Builtin | Size: 0x4
	m_flFlinchStack: 10032n, // float32 m_flFlinchStack; |  0x2730 | Schema_Builtin | Size: 0x4
	m_flVelocityModifier: 10036n, // float32 m_flVelocityModifier; |  0x2734 | Schema_Builtin | Size: 0x4
	m_flHitHeading: 10040n, // float32 m_flHitHeading; |  0x2738 | Schema_Builtin | Size: 0x4
	m_nHitBodyPart: 10044n, // int32_t m_nHitBodyPart; |  0x273c | Schema_Builtin | Size: 0x4
	m_bWaitForNoAttack: 10048n, // bool m_bWaitForNoAttack; |  0x2740 | Schema_Builtin | Size: 0x1
	m_ignoreLadderJumpTime: 10052n, // float32 m_ignoreLadderJumpTime; |  0x2744 | Schema_Builtin | Size: 0x4
	m_bKilledByHeadshot: 10057n, // bool m_bKilledByHeadshot; |  0x2749 | Schema_Builtin | Size: 0x1
	m_ArmorValue: 10060n, // int32_t m_ArmorValue; |  0x274c | Schema_Builtin | Size: 0x4
	m_unCurrentEquipmentValue: 10064n, // uint16_t m_unCurrentEquipmentValue; |  0x2750 | Schema_Builtin | Size: 0x2
	m_unRoundStartEquipmentValue: 10066n, // uint16_t m_unRoundStartEquipmentValue; |  0x2752 | Schema_Builtin | Size: 0x2
	m_unFreezetimeEndEquipmentValue: 10068n, // uint16_t m_unFreezetimeEndEquipmentValue; |  0x2754 | Schema_Builtin | Size: 0x2
	m_nLastKillerIndex: 10072n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_bOldIsScoped: 10076n, // bool m_bOldIsScoped; |  0x275c | Schema_Builtin | Size: 0x1
	m_bHasDeathInfo: 10077n, // bool m_bHasDeathInfo; |  0x275d | Schema_Builtin | Size: 0x1
	m_flDeathInfoTime: 10080n, // float32 m_flDeathInfoTime; |  0x2760 | Schema_Builtin | Size: 0x4
	m_vecDeathInfoOrigin: 10084n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_grenadeParameterStashTime: 10100n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGrenadeParametersStashed: 10104n, // bool m_bGrenadeParametersStashed; |  0x2778 | Schema_Builtin | Size: 0x1
	m_angStashedShootAngles: 10108n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecStashedGrenadeThrowPosition: 10120n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecStashedVelocity: 10132n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angShootAngleHistory: 10144n, // GlobalTypes::QAngle[2]  | Schema_FixedArray | Size: 0x18
	m_vecThrowPositionHistory: 10168n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_vecVelocityHistory: 10192n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_PredictedDamageTags: 10216n, // client::C_UtlVectorEmbeddedNetworkVar<client::PredictedDamageTag_t>  | Schema_Atomic | Size: 0x68
	m_nPrevHighestReceivedDamageTagTick: 10320n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nHighestAppliedDamageTagTick: 10324n, // int32_t m_nHighestAppliedDamageTagTick; |  0x2854 | Schema_Builtin | Size: 0x4
	m_bShouldAutobuyDMWeapons: 15756n, // bool m_bShouldAutobuyDMWeapons; |  0x3d8c | Schema_Builtin | Size: 0x1
	m_fImmuneToGunGameDamageTime: 15760n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGunGameImmunity: 15764n, // bool m_bGunGameImmunity; |  0x3d94 | Schema_Builtin | Size: 0x1
	m_fImmuneToGunGameDamageTimeLast: 15768n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fMolotovDamageTime: 15772n, // float32 m_fMolotovDamageTime; |  0x3d9c | Schema_Builtin | Size: 0x4
	m_vecLastAliveLocalVelocity: 15780n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fRenderingClipPlane: 15792n, // float32 m_fRenderingClipPlane[4]; |  0x3db0 | Schema_FixedArray | Size: 0x10
	m_nLastClipPlaneSetupFrame: 15808n, // int32_t m_nLastClipPlaneSetupFrame; |  0x3dc0 | Schema_Builtin | Size: 0x4
	m_vecLastClipCameraPos: 15812n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLastClipCameraForward: 15824n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bClipHitStaticWorld: 15836n, // bool m_bClipHitStaticWorld; |  0x3ddc | Schema_Builtin | Size: 0x1
	m_bCachedPlaneIsValid: 15837n, // bool m_bCachedPlaneIsValid; |  0x3ddd | Schema_Builtin | Size: 0x1
	m_pClippingWeapon: 15840n, // client::C_CSWeaponBase**  | Schema_Ptr | Size: 0x8
	m_nPlayerInfernoBodyFx: 15848n, // client::ParticleIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_angEyeAngles: 15856n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_arrOldEyeAnglesTimes: 16000n, // GlobalTypes::GameTime_t[4]  | Schema_FixedArray | Size: 0x40
	m_arrOldEyeAngles: 16016n, // GlobalTypes::QAngle[4]  | Schema_FixedArray | Size: 0x30
	m_angEyeAnglesVelocity: 16064n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_iIDEntIndex: 16076n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_delayTargetIDTimer: 16080n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_iTargetItemEntIdx: 16104n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_iOldIDEntIndex: 16108n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_holdTargetIDTimer: 16112n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
