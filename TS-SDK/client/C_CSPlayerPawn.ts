// generated - do not edit!

import {client_C_CSPlayerPawnBase} from './C_CSPlayerPawnBase';
// Class size: 0x3EF0
// BaseClass: : public CS2::client::C_CSPlayerPawnBase
export const client_C_CSPlayerPawn  = {
	...client_C_CSPlayerPawnBase,
	m_pBulletServices: 5728n, // client::CCSPlayer_BulletServices**  | Schema_Ptr | Size: 0x8
	m_pHostageServices: 5736n, // client::CCSPlayer_HostageServices**  | Schema_Ptr | Size: 0x8
	m_pBuyServices: 5744n, // client::CCSPlayer_BuyServices**  | Schema_Ptr | Size: 0x8
	m_pGlowServices: 5752n, // client::CCSPlayer_GlowServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 5760n, // client::CCSPlayer_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pDamageReactServices: 5768n, // client::CCSPlayer_DamageReactServices**  | Schema_Ptr | Size: 0x8
	m_flHealthShotBoostExpirationTime: 5776n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastFiredWeaponTime: 5780n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bHasFemaleVoice: 5784n, // bool m_bHasFemaleVoice; |  0x1698 | Schema_Builtin | Size: 0x1
	m_flLandingTimeSeconds: 5788n, // float32 m_flLandingTimeSeconds; |  0x169c | Schema_Builtin | Size: 0x4
	m_flOldFallVelocity: 5792n, // float32 m_flOldFallVelocity; |  0x16a0 | Schema_Builtin | Size: 0x4
	m_szLastPlaceName: 5796n, // char m_szLastPlaceName[18]; |  0x16a4 | Schema_FixedArray | Size: 0x12
	m_bPrevDefuser: 5814n, // bool m_bPrevDefuser; |  0x16b6 | Schema_Builtin | Size: 0x1
	m_bPrevHelmet: 5815n, // bool m_bPrevHelmet; |  0x16b7 | Schema_Builtin | Size: 0x1
	m_nPrevArmorVal: 5816n, // int32_t m_nPrevArmorVal; |  0x16b8 | Schema_Builtin | Size: 0x4
	m_nPrevGrenadeAmmoCount: 5820n, // int32_t m_nPrevGrenadeAmmoCount; |  0x16bc | Schema_Builtin | Size: 0x4
	m_unPreviousWeaponHash: 5824n, // uint32_t m_unPreviousWeaponHash; |  0x16c0 | Schema_Builtin | Size: 0x4
	m_unWeaponHash: 5828n, // uint32_t m_unWeaponHash; |  0x16c4 | Schema_Builtin | Size: 0x4
	m_bInBuyZone: 5832n, // bool m_bInBuyZone; |  0x16c8 | Schema_Builtin | Size: 0x1
	m_bPreviouslyInBuyZone: 5833n, // bool m_bPreviouslyInBuyZone; |  0x16c9 | Schema_Builtin | Size: 0x1
	m_aimPunchAngle: 5836n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchAngleVel: 5848n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchTickBase: 5860n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_aimPunchTickFraction: 5864n, // float32 m_aimPunchTickFraction; |  0x16e8 | Schema_Builtin | Size: 0x4
	m_bInLanding: 5904n, // bool m_bInLanding; |  0x1710 | Schema_Builtin | Size: 0x1
	m_flLandingStartTime: 5908n, // float32 m_flLandingStartTime; |  0x1714 | Schema_Builtin | Size: 0x4
	m_bInHostageRescueZone: 5912n, // bool m_bInHostageRescueZone; |  0x1718 | Schema_Builtin | Size: 0x1
	m_bInBombZone: 5913n, // bool m_bInBombZone; |  0x1719 | Schema_Builtin | Size: 0x1
	m_bIsBuyMenuOpen: 5914n, // bool m_bIsBuyMenuOpen; |  0x171a | Schema_Builtin | Size: 0x1
	m_flTimeOfLastInjury: 5916n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextSprayDecalTime: 5920n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iRetakesOffering: 6264n, // int32_t m_iRetakesOffering; |  0x1878 | Schema_Builtin | Size: 0x4
	m_iRetakesOfferingCard: 6268n, // int32_t m_iRetakesOfferingCard; |  0x187c | Schema_Builtin | Size: 0x4
	m_bRetakesHasDefuseKit: 6272n, // bool m_bRetakesHasDefuseKit; |  0x1880 | Schema_Builtin | Size: 0x1
	m_bRetakesMVPLastRound: 6273n, // bool m_bRetakesMVPLastRound; |  0x1881 | Schema_Builtin | Size: 0x1
	m_iRetakesMVPBoostItem: 6276n, // int32_t m_iRetakesMVPBoostItem; |  0x1884 | Schema_Builtin | Size: 0x4
	m_RetakesMVPBoostExtraUtility: 6280n, // client::loadout_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_bNeedToReApplyGloves: 6285n, // bool m_bNeedToReApplyGloves; |  0x188d | Schema_Builtin | Size: 0x1
	m_EconGloves: 6288n, // client::C_EconItemView  | Schema_DeclaredClass | Size: 0x470
	m_nEconGlovesChanged: 7424n, // uint8_t m_nEconGlovesChanged; |  0x1d00 | Schema_Builtin | Size: 0x1
	m_bMustSyncRagdollState: 7425n, // bool m_bMustSyncRagdollState; |  0x1d01 | Schema_Builtin | Size: 0x1
	m_nRagdollDamageBone: 7428n, // int32_t m_nRagdollDamageBone; |  0x1d04 | Schema_Builtin | Size: 0x4
	m_vRagdollDamageForce: 7432n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vRagdollDamagePosition: 7444n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szRagdollDamageWeaponName: 7456n, // char m_szRagdollDamageWeaponName[64]; |  0x1d20 | Schema_FixedArray | Size: 0x40
	m_bRagdollDamageHeadshot: 7520n, // bool m_bRagdollDamageHeadshot; |  0x1d60 | Schema_Builtin | Size: 0x1
	m_vRagdollServerOrigin: 7524n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastLandTime: 9184n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bOnGroundLastTick: 9188n, // bool m_bOnGroundLastTick; |  0x23e4 | Schema_Builtin | Size: 0x1
	m_hHudModelArms: 9216n, // GlobalTypes::CHandle<client::C_CS2HudModelArms>  | Schema_Atomic | Size: 0x4
	m_qDeathEyeAngles: 9220n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bSkipOneHeadConstraintUpdate: 9232n, // bool m_bSkipOneHeadConstraintUpdate; |  0x2410 | Schema_Builtin | Size: 0x1
	m_bLeftHanded: 9233n, // bool m_bLeftHanded; |  0x2411 | Schema_Builtin | Size: 0x1
	m_fSwitchedHandednessTime: 9236n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flViewmodelOffsetX: 9240n, // float32 m_flViewmodelOffsetX; |  0x2418 | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetY: 9244n, // float32 m_flViewmodelOffsetY; |  0x241c | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetZ: 9248n, // float32 m_flViewmodelOffsetZ; |  0x2420 | Schema_Builtin | Size: 0x4
	m_flViewmodelFOV: 9252n, // float32 m_flViewmodelFOV; |  0x2424 | Schema_Builtin | Size: 0x4
	m_vecPlayerPatchEconIndices: 9256n, // uint32_t m_vecPlayerPatchEconIndices[5]; |  0x2428 | Schema_FixedArray | Size: 0x14
	m_GunGameImmunityColor: 9312n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_vecBulletHitModels: 9392n, // GlobalTypes::CUtlVector<client::C_BulletHitModel*>  | Schema_Atomic | Size: 0x18
	m_bIsWalking: 9416n, // bool m_bIsWalking; |  0x24c8 | Schema_Builtin | Size: 0x1
	m_thirdPersonHeading: 9424n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flSlopeDropOffset: 9568n, // float32 m_flSlopeDropOffset; |  0x2560 | Schema_Builtin | Size: 0x4
	m_flSlopeDropHeight: 9688n, // float32 m_flSlopeDropHeight; |  0x25d8 | Schema_Builtin | Size: 0x4
	m_vHeadConstraintOffset: 9808n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_entitySpottedState: 9952n, // client::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_bIsScoped: 9976n, // bool m_bIsScoped; |  0x26f8 | Schema_Builtin | Size: 0x1
	m_bResumeZoom: 9977n, // bool m_bResumeZoom; |  0x26f9 | Schema_Builtin | Size: 0x1
	m_bIsDefusing: 9978n, // bool m_bIsDefusing; |  0x26fa | Schema_Builtin | Size: 0x1
	m_bIsGrabbingHostage: 9979n, // bool m_bIsGrabbingHostage; |  0x26fb | Schema_Builtin | Size: 0x1
	m_iBlockingUseActionInProgress: 9980n, // client::CSPlayerBlockingUseAction_t  | Schema_DeclaredEnum | Size: 0x4
	m_flEmitSoundTime: 9984n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInNoDefuseArea: 9988n, // bool m_bInNoDefuseArea; |  0x2704 | Schema_Builtin | Size: 0x1
	m_nWhichBombZone: 9992n, // int32_t m_nWhichBombZone; |  0x2708 | Schema_Builtin | Size: 0x4
	m_iShotsFired: 9996n, // int32_t m_iShotsFired; |  0x270c | Schema_Builtin | Size: 0x4
	m_flFlinchStack: 10000n, // float32 m_flFlinchStack; |  0x2710 | Schema_Builtin | Size: 0x4
	m_flVelocityModifier: 10004n, // float32 m_flVelocityModifier; |  0x2714 | Schema_Builtin | Size: 0x4
	m_flHitHeading: 10008n, // float32 m_flHitHeading; |  0x2718 | Schema_Builtin | Size: 0x4
	m_nHitBodyPart: 10012n, // int32_t m_nHitBodyPart; |  0x271c | Schema_Builtin | Size: 0x4
	m_bWaitForNoAttack: 10016n, // bool m_bWaitForNoAttack; |  0x2720 | Schema_Builtin | Size: 0x1
	m_ignoreLadderJumpTime: 10020n, // float32 m_ignoreLadderJumpTime; |  0x2724 | Schema_Builtin | Size: 0x4
	m_bKilledByHeadshot: 10025n, // bool m_bKilledByHeadshot; |  0x2729 | Schema_Builtin | Size: 0x1
	m_ArmorValue: 10028n, // int32_t m_ArmorValue; |  0x272c | Schema_Builtin | Size: 0x4
	m_unCurrentEquipmentValue: 10032n, // uint16_t m_unCurrentEquipmentValue; |  0x2730 | Schema_Builtin | Size: 0x2
	m_unRoundStartEquipmentValue: 10034n, // uint16_t m_unRoundStartEquipmentValue; |  0x2732 | Schema_Builtin | Size: 0x2
	m_unFreezetimeEndEquipmentValue: 10036n, // uint16_t m_unFreezetimeEndEquipmentValue; |  0x2734 | Schema_Builtin | Size: 0x2
	m_nLastKillerIndex: 10040n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_bOldIsScoped: 10044n, // bool m_bOldIsScoped; |  0x273c | Schema_Builtin | Size: 0x1
	m_bHasDeathInfo: 10045n, // bool m_bHasDeathInfo; |  0x273d | Schema_Builtin | Size: 0x1
	m_flDeathInfoTime: 10048n, // float32 m_flDeathInfoTime; |  0x2740 | Schema_Builtin | Size: 0x4
	m_vecDeathInfoOrigin: 10052n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_grenadeParameterStashTime: 10068n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGrenadeParametersStashed: 10072n, // bool m_bGrenadeParametersStashed; |  0x2758 | Schema_Builtin | Size: 0x1
	m_angStashedShootAngles: 10076n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecStashedGrenadeThrowPosition: 10088n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecStashedVelocity: 10100n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angShootAngleHistory: 10112n, // GlobalTypes::QAngle[2]  | Schema_FixedArray | Size: 0x18
	m_vecThrowPositionHistory: 10136n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_vecVelocityHistory: 10160n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_PredictedDamageTags: 10184n, // client::C_UtlVectorEmbeddedNetworkVar<client::PredictedDamageTag_t>  | Schema_Atomic | Size: 0x68
	m_nPrevHighestReceivedDamageTagTick: 10288n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nHighestAppliedDamageTagTick: 10292n, // int32_t m_nHighestAppliedDamageTagTick; |  0x2834 | Schema_Builtin | Size: 0x4
	m_bShouldAutobuyDMWeapons: 15724n, // bool m_bShouldAutobuyDMWeapons; |  0x3d6c | Schema_Builtin | Size: 0x1
	m_fImmuneToGunGameDamageTime: 15728n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGunGameImmunity: 15732n, // bool m_bGunGameImmunity; |  0x3d74 | Schema_Builtin | Size: 0x1
	m_fImmuneToGunGameDamageTimeLast: 15736n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fMolotovDamageTime: 15740n, // float32 m_fMolotovDamageTime; |  0x3d7c | Schema_Builtin | Size: 0x4
	m_vecLastAliveLocalVelocity: 15748n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_fRenderingClipPlane: 15760n, // float32 m_fRenderingClipPlane[4]; |  0x3d90 | Schema_FixedArray | Size: 0x10
	m_nLastClipPlaneSetupFrame: 15776n, // int32_t m_nLastClipPlaneSetupFrame; |  0x3da0 | Schema_Builtin | Size: 0x4
	m_vecLastClipCameraPos: 15780n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecLastClipCameraForward: 15792n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bClipHitStaticWorld: 15804n, // bool m_bClipHitStaticWorld; |  0x3dbc | Schema_Builtin | Size: 0x1
	m_bCachedPlaneIsValid: 15805n, // bool m_bCachedPlaneIsValid; |  0x3dbd | Schema_Builtin | Size: 0x1
	m_pClippingWeapon: 15808n, // client::C_CSWeaponBase**  | Schema_Ptr | Size: 0x8
	m_nPlayerInfernoBodyFx: 15816n, // client::ParticleIndex_t  | Schema_DeclaredClass | Size: 0x4
	m_angEyeAngles: 15824n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_arrOldEyeAnglesTimes: 15968n, // GlobalTypes::GameTime_t[4]  | Schema_FixedArray | Size: 0x40
	m_arrOldEyeAngles: 15984n, // GlobalTypes::QAngle[4]  | Schema_FixedArray | Size: 0x30
	m_angEyeAnglesVelocity: 16032n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_iIDEntIndex: 16044n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_delayTargetIDTimer: 16048n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_iTargetItemEntIdx: 16072n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_iOldIDEntIndex: 16076n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_holdTargetIDTimer: 16080n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
