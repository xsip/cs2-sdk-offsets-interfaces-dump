#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CCopyRecipientFilter {
    void **__vftable_0;
    int32_t m_Flags;
    char pad_1905[0x4];
    char m_Recipients[0x18];
    char pad_1906[0x8];
    CPlayerSlot m_slotPlayerExcludedDueToPrediction;
    char pad_1907[0x4];
};
