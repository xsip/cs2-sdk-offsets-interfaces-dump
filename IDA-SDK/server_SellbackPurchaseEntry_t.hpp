#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_SellbackPurchaseEntry_t {
    char vTable4138[0x30];
    uint16_t m_unDefIdx;
    char pad_4139[0x2];
    int32_t m_nCost;
    int32_t m_nPrevArmor;
    bool m_bPrevHelmet;
    char pad_4140[0x3];
    CEntityHandle m_hItem;
    char end_pad_4141[0x4];
};
