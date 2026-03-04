// generated - do not edit!

import {server_CCSPlayerPawnBase} from './CCSPlayerPawnBase';
// Class size: 0x1C30
// BaseClass: : public CS2::server::CCSPlayerPawnBase
export const server_CCSPlayerPawn  = {
	...server_CCSPlayerPawnBase,
	m_pBulletServices: 3704n, // server::CCSPlayer_BulletServices**  | Schema_Ptr | Size: 0x8
	m_pHostageServices: 3712n, // server::CCSPlayer_HostageServices**  | Schema_Ptr | Size: 0x8
	m_pBuyServices: 3720n, // server::CCSPlayer_BuyServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 3728n, // server::CCSPlayer_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pRadioServices: 3736n, // server::CCSPlayer_RadioServices**  | Schema_Ptr | Size: 0x8
	m_pDamageReactServices: 3744n, // server::CCSPlayer_DamageReactServices**  | Schema_Ptr | Size: 0x8
	m_nCharacterDefIndex: 3752n, // uint16_t m_nCharacterDefIndex; |  0xea8 | Schema_Builtin | Size: 0x2
	m_bHasFemaleVoice: 3754n, // bool m_bHasFemaleVoice; |  0xeaa | Schema_Builtin | Size: 0x1
	m_strVOPrefix: 3760n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_szLastPlaceName: 3768n, // char m_szLastPlaceName[18]; |  0xeb8 | Schema_FixedArray | Size: 0x12
	m_bInHostageResetZone: 4008n, // bool m_bInHostageResetZone; |  0xfa8 | Schema_Builtin | Size: 0x1
	m_bInBuyZone: 4009n, // bool m_bInBuyZone; |  0xfa9 | Schema_Builtin | Size: 0x1
	m_TouchingBuyZones: 4016n, // server::CUtlVector<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
	m_bWasInBuyZone: 4040n, // bool m_bWasInBuyZone; |  0xfc8 | Schema_Builtin | Size: 0x1
	m_bInHostageRescueZone: 4041n, // bool m_bInHostageRescueZone; |  0xfc9 | Schema_Builtin | Size: 0x1
	m_bInBombZone: 4042n, // bool m_bInBombZone; |  0xfca | Schema_Builtin | Size: 0x1
	m_bWasInHostageRescueZone: 4043n, // bool m_bWasInHostageRescueZone; |  0xfcb | Schema_Builtin | Size: 0x1
	m_iRetakesOffering: 4044n, // int32_t m_iRetakesOffering; |  0xfcc | Schema_Builtin | Size: 0x4
	m_iRetakesOfferingCard: 4048n, // int32_t m_iRetakesOfferingCard; |  0xfd0 | Schema_Builtin | Size: 0x4
	m_bRetakesHasDefuseKit: 4052n, // bool m_bRetakesHasDefuseKit; |  0xfd4 | Schema_Builtin | Size: 0x1
	m_bRetakesMVPLastRound: 4053n, // bool m_bRetakesMVPLastRound; |  0xfd5 | Schema_Builtin | Size: 0x1
	m_iRetakesMVPBoostItem: 4056n, // int32_t m_iRetakesMVPBoostItem; |  0xfd8 | Schema_Builtin | Size: 0x4
	m_RetakesMVPBoostExtraUtility: 4060n, // client::loadout_slot_t  | Schema_DeclaredEnum | Size: 0x4
	m_flHealthShotBoostExpirationTime: 4064n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLandingTimeSeconds: 4068n, // float32 m_flLandingTimeSeconds; |  0xfe4 | Schema_Builtin | Size: 0x4
	m_aimPunchAngle: 4072n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchAngleVel: 4084n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimPunchTickBase: 4096n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_aimPunchTickFraction: 4100n, // float32 m_aimPunchTickFraction; |  0x1004 | Schema_Builtin | Size: 0x4
	m_aimPunchCache: 4104n, // GlobalTypes::CUtlVector<GlobalTypes::QAngle>  | Schema_Atomic | Size: 0x18
	m_bIsBuyMenuOpen: 4128n, // bool m_bIsBuyMenuOpen; |  0x1020 | Schema_Builtin | Size: 0x1
	m_lastLandTime: 5824n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bOnGroundLastTick: 5828n, // bool m_bOnGroundLastTick; |  0x16c4 | Schema_Builtin | Size: 0x1
	m_iPlayerLocked: 5832n, // int32_t m_iPlayerLocked; |  0x16c8 | Schema_Builtin | Size: 0x4
	m_flTimeOfLastInjury: 5840n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flNextSprayDecalTime: 5844n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bNextSprayDecalTimeExpedited: 5848n, // bool m_bNextSprayDecalTimeExpedited; |  0x16d8 | Schema_Builtin | Size: 0x1
	m_nRagdollDamageBone: 5852n, // int32_t m_nRagdollDamageBone; |  0x16dc | Schema_Builtin | Size: 0x4
	m_vRagdollDamageForce: 5856n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vRagdollDamagePosition: 5868n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szRagdollDamageWeaponName: 5880n, // char m_szRagdollDamageWeaponName[64]; |  0x16f8 | Schema_FixedArray | Size: 0x40
	m_bRagdollDamageHeadshot: 5944n, // bool m_bRagdollDamageHeadshot; |  0x1738 | Schema_Builtin | Size: 0x1
	m_vRagdollServerOrigin: 5948n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_EconGloves: 5960n, // server::CEconItemView  | Schema_DeclaredClass | Size: 0x2a8
	m_nEconGlovesChanged: 6640n, // uint8_t m_nEconGlovesChanged; |  0x19f0 | Schema_Builtin | Size: 0x1
	m_qDeathEyeAngles: 6644n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bSkipOneHeadConstraintUpdate: 6656n, // bool m_bSkipOneHeadConstraintUpdate; |  0x1a00 | Schema_Builtin | Size: 0x1
	m_bLeftHanded: 6657n, // bool m_bLeftHanded; |  0x1a01 | Schema_Builtin | Size: 0x1
	m_fSwitchedHandednessTime: 6660n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flViewmodelOffsetX: 6664n, // float32 m_flViewmodelOffsetX; |  0x1a08 | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetY: 6668n, // float32 m_flViewmodelOffsetY; |  0x1a0c | Schema_Builtin | Size: 0x4
	m_flViewmodelOffsetZ: 6672n, // float32 m_flViewmodelOffsetZ; |  0x1a10 | Schema_Builtin | Size: 0x4
	m_flViewmodelFOV: 6676n, // float32 m_flViewmodelFOV; |  0x1a14 | Schema_Builtin | Size: 0x4
	m_bIsWalking: 6680n, // bool m_bIsWalking; |  0x1a18 | Schema_Builtin | Size: 0x1
	m_fLastGivenDefuserTime: 6684n, // float32 m_fLastGivenDefuserTime; |  0x1a1c | Schema_Builtin | Size: 0x4
	m_fLastGivenBombTime: 6688n, // float32 m_fLastGivenBombTime; |  0x1a20 | Schema_Builtin | Size: 0x4
	m_flDealtDamageToEnemyMostRecentTimestamp: 6692n, // float32 m_flDealtDamageToEnemyMostRecentTimestamp; |  0x1a24 | Schema_Builtin | Size: 0x4
	m_iDisplayHistoryBits: 6696n, // uint32_t m_iDisplayHistoryBits; |  0x1a28 | Schema_Builtin | Size: 0x4
	m_flLastAttackedTeammate: 6700n, // float32 m_flLastAttackedTeammate; |  0x1a2c | Schema_Builtin | Size: 0x4
	m_allowAutoFollowTime: 6704n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bResetArmorNextSpawn: 6708n, // bool m_bResetArmorNextSpawn; |  0x1a34 | Schema_Builtin | Size: 0x1
	m_nLastKillerIndex: 6712n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_entitySpottedState: 6720n, // server::EntitySpottedState_t  | Schema_DeclaredClass | Size: 0x18
	m_nSpotRules: 6744n, // int32_t m_nSpotRules; |  0x1a58 | Schema_Builtin | Size: 0x4
	m_bIsScoped: 6748n, // bool m_bIsScoped; |  0x1a5c | Schema_Builtin | Size: 0x1
	m_bResumeZoom: 6749n, // bool m_bResumeZoom; |  0x1a5d | Schema_Builtin | Size: 0x1
	m_bIsDefusing: 6750n, // bool m_bIsDefusing; |  0x1a5e | Schema_Builtin | Size: 0x1
	m_bIsGrabbingHostage: 6751n, // bool m_bIsGrabbingHostage; |  0x1a5f | Schema_Builtin | Size: 0x1
	m_iBlockingUseActionInProgress: 6752n, // client::CSPlayerBlockingUseAction_t  | Schema_DeclaredEnum | Size: 0x4
	m_flEmitSoundTime: 6756n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bInNoDefuseArea: 6760n, // bool m_bInNoDefuseArea; |  0x1a68 | Schema_Builtin | Size: 0x1
	m_iBombSiteIndex: 6764n, // GlobalTypes::CEntityIndex  | Schema_Atomic | Size: 0x4
	m_nWhichBombZone: 6768n, // int32_t m_nWhichBombZone; |  0x1a70 | Schema_Builtin | Size: 0x4
	m_bInBombZoneTrigger: 6772n, // bool m_bInBombZoneTrigger; |  0x1a74 | Schema_Builtin | Size: 0x1
	m_bWasInBombZoneTrigger: 6773n, // bool m_bWasInBombZoneTrigger; |  0x1a75 | Schema_Builtin | Size: 0x1
	m_iShotsFired: 6776n, // int32_t m_iShotsFired; |  0x1a78 | Schema_Builtin | Size: 0x4
	m_flFlinchStack: 6780n, // float32 m_flFlinchStack; |  0x1a7c | Schema_Builtin | Size: 0x4
	m_flVelocityModifier: 6784n, // float32 m_flVelocityModifier; |  0x1a80 | Schema_Builtin | Size: 0x4
	m_flHitHeading: 6788n, // float32 m_flHitHeading; |  0x1a84 | Schema_Builtin | Size: 0x4
	m_nHitBodyPart: 6792n, // int32_t m_nHitBodyPart; |  0x1a88 | Schema_Builtin | Size: 0x4
	m_vecTotalBulletForce: 6796n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bWaitForNoAttack: 6808n, // bool m_bWaitForNoAttack; |  0x1a98 | Schema_Builtin | Size: 0x1
	m_ignoreLadderJumpTime: 6812n, // float32 m_ignoreLadderJumpTime; |  0x1a9c | Schema_Builtin | Size: 0x4
	m_bKilledByHeadshot: 6816n, // bool m_bKilledByHeadshot; |  0x1aa0 | Schema_Builtin | Size: 0x1
	m_LastHitBox: 6820n, // int32_t m_LastHitBox; |  0x1aa4 | Schema_Builtin | Size: 0x4
	m_pBot: 6824n, // server::CCSBot**  | Schema_Ptr | Size: 0x8
	m_bBotAllowActive: 6832n, // bool m_bBotAllowActive; |  0x1ab0 | Schema_Builtin | Size: 0x1
	m_thirdPersonHeading: 6836n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flSlopeDropOffset: 6848n, // float32 m_flSlopeDropOffset; |  0x1ac0 | Schema_Builtin | Size: 0x4
	m_flSlopeDropHeight: 6852n, // float32 m_flSlopeDropHeight; |  0x1ac4 | Schema_Builtin | Size: 0x4
	m_vHeadConstraintOffset: 6856n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nLastPickupPriority: 6868n, // int32_t m_nLastPickupPriority; |  0x1ad4 | Schema_Builtin | Size: 0x4
	m_flLastPickupPriorityTime: 6872n, // float32 m_flLastPickupPriorityTime; |  0x1ad8 | Schema_Builtin | Size: 0x4
	m_ArmorValue: 6876n, // int32_t m_ArmorValue; |  0x1adc | Schema_Builtin | Size: 0x4
	m_unCurrentEquipmentValue: 6880n, // uint16_t m_unCurrentEquipmentValue; |  0x1ae0 | Schema_Builtin | Size: 0x2
	m_unRoundStartEquipmentValue: 6882n, // uint16_t m_unRoundStartEquipmentValue; |  0x1ae2 | Schema_Builtin | Size: 0x2
	m_unFreezetimeEndEquipmentValue: 6884n, // uint16_t m_unFreezetimeEndEquipmentValue; |  0x1ae4 | Schema_Builtin | Size: 0x2
	m_iLastWeaponFireUsercmd: 6888n, // int32_t m_iLastWeaponFireUsercmd; |  0x1ae8 | Schema_Builtin | Size: 0x4
	m_bIsSpawning: 6892n, // bool m_bIsSpawning; |  0x1aec | Schema_Builtin | Size: 0x1
	m_iDeathFlags: 6904n, // int32_t m_iDeathFlags; |  0x1af8 | Schema_Builtin | Size: 0x4
	m_bHasDeathInfo: 6908n, // bool m_bHasDeathInfo; |  0x1afc | Schema_Builtin | Size: 0x1
	m_flDeathInfoTime: 6912n, // float32 m_flDeathInfoTime; |  0x1b00 | Schema_Builtin | Size: 0x4
	m_vecDeathInfoOrigin: 6916n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPlayerPatchEconIndices: 6928n, // uint32_t m_vecPlayerPatchEconIndices[5]; |  0x1b10 | Schema_FixedArray | Size: 0x14
	m_GunGameImmunityColor: 6948n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_grenadeParameterStashTime: 6952n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGrenadeParametersStashed: 6956n, // bool m_bGrenadeParametersStashed; |  0x1b2c | Schema_Builtin | Size: 0x1
	m_angStashedShootAngles: 6960n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecStashedGrenadeThrowPosition: 6972n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecStashedVelocity: 6984n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angShootAngleHistory: 6996n, // GlobalTypes::QAngle[2]  | Schema_FixedArray | Size: 0x18
	m_vecThrowPositionHistory: 7020n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_vecVelocityHistory: 7044n, // GlobalTypes::Vector[2]  | Schema_FixedArray | Size: 0x18
	m_PredictedDamageTags: 7072n, // server::CUtlVectorEmbeddedNetworkVar<server::PredictedDamageTag_t>  | Schema_Atomic | Size: 0x68
	m_nHighestAppliedDamageTagTick: 7176n, // int32_t m_nHighestAppliedDamageTagTick; |  0x1c08 | Schema_Builtin | Size: 0x4
	m_bCommittingSuicideOnTeamChange: 7180n, // bool m_bCommittingSuicideOnTeamChange; |  0x1c0c | Schema_Builtin | Size: 0x1
	m_wasNotKilledNaturally: 7181n, // bool m_wasNotKilledNaturally; |  0x1c0d | Schema_Builtin | Size: 0x1
	m_fImmuneToGunGameDamageTime: 7184n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGunGameImmunity: 7188n, // bool m_bGunGameImmunity; |  0x1c14 | Schema_Builtin | Size: 0x1
	m_fMolotovDamageTime: 7192n, // float32 m_fMolotovDamageTime; |  0x1c18 | Schema_Builtin | Size: 0x4
	m_angEyeAngles: 7196n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
}
