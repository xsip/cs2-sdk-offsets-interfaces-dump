#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "server_WeaponPurchaseTracker_t.hpp"
#include "server_WeaponPurchaseTracker_t.hpp"

class server_CCSPlayer_ActionTrackingServices {
    char vTable1197[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1198[0x10];
    char vTable3411[0x1b0];
    char m_hLastWeaponBeforeC4AutoSwitch[0x4];
    char pad_3412[0x28];
    bool m_bIsRescuing;
    char pad_3413[0x3];
    server_WeaponPurchaseTracker_t m_weaponPurchasesThisMatch;
    server_WeaponPurchaseTracker_t m_weaponPurchasesThisRound;
    char end_pad_3414[0x8];
};
