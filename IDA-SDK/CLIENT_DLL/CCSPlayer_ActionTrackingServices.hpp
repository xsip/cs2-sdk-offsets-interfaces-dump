#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"
#include "WeaponPurchaseTracker_t.hpp"
#include "WeaponPurchaseTracker_t.hpp"

class CCSPlayer_ActionTrackingServices {
    char _vtable_pad_635[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char pad_636[0x10];
    char m_hLastWeaponBeforeC4AutoSwitch[0x4];
    bool m_bIsRescuing;
    char pad_777[0x3];
    WeaponPurchaseTracker_t m_weaponPurchasesThisMatch;
    WeaponPurchaseTracker_t m_weaponPurchasesThisRound;
};
