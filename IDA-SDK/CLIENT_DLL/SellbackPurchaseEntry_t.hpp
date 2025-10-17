#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class SellbackPurchaseEntry_t {
    char _vtable_pad_1082[0x30];
    uint16_t m_unDefIdx;
    char pad_1083[0x2];
    int32_t m_nCost;
    int32_t m_nPrevArmor;
    bool m_bPrevHelmet;
    char pad_1084[0x3];
    CEntityHandle m_hItem;
    char end_pad_1085[0x4];
};
