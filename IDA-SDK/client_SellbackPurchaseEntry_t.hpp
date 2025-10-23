#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_SellbackPurchaseEntry_t {
    char vTable1643[0x30];
    uint16_t m_unDefIdx;
    char pad_1644[0x2];
    int32_t m_nCost;
    int32_t m_nPrevArmor;
    bool m_bPrevHelmet;
    char pad_1645[0x3];
    CEntityHandle m_hItem;
    char end_pad_1646[0x4];
};
