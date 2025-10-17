#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_WeaponServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    char m_hMyWeapons[0x18];
    char m_hActiveWeapon[0x4];
    char m_hLastWeapon[0x4];
    uint16_t m_iAmmo[32];
    bool m_bPreventWeaponPickup;
    char end_pad_3438[0x7];
    char vTable3434[0x10];
    entity2_GameTime_t m_flNextAttack;
    bool m_bIsLookingAtWeapon;
    bool m_bIsHoldingLookAtWeapon;
    char pad_3435[0x2];
    char m_hSavedWeapon[0x4];
    int32_t m_nTimeToMelee;
    int32_t m_nTimeToSecondary;
    int32_t m_nTimeToPrimary;
    int32_t m_nTimeToSniperRifle;
    bool m_bIsBeingGivenItem;
    bool m_bIsPickingUpItemWithUse;
    bool m_bPickedUpWeapon;
    bool m_bDisableAutoDeploy;
    bool m_bIsPickingUpGroundWeapon;
    char pad_3436[0x17e7];
    char m_networkAnimTiming[0x18];
    bool m_bBlockInspectUntilNextGraphUpdate;
    char end_pad_3437[0x7];
};
