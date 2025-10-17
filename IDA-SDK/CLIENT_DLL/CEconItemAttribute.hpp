#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CEconItemAttribute {
    char _vtable_pad_346[0x30];
    uint16_t m_iAttributeDefinitionIndex;
    char pad_347[0x2];
    float32 m_flValue;
    float32 m_flInitialValue;
    int32_t m_nRefundableCurrency;
    bool m_bSetBonus;
    char end_pad_348[0x7];
};
