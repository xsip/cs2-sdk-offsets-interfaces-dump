#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "client_WeaponPurchaseTracker_t.hpp"

class client_CCSPlayer_ActionTrackingServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    char m_hLastWeaponBeforeC4AutoSwitch[0x4];
    bool m_bIsRescuing;
    char pad_1338[0x3];
    client_WeaponPurchaseTracker_t m_weaponPurchasesThisMatch;
    client_WeaponPurchaseTracker_t m_weaponPurchasesThisRound;
};
