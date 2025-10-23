#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CPlayer_WeaponServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    char m_hMyWeapons[0x18];
    char m_hActiveWeapon[0x4];
    char m_hLastWeapon[0x4];
    uint16_t m_iAmmo[32];
    bool m_bPreventWeaponPickup;
    char end_pad_3437[0x7];
};
