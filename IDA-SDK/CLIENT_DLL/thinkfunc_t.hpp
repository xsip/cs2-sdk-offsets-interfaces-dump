#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTick_t.hpp"
#include "GameTick_t.hpp"

class thinkfunc_t {
    char _vtable_pad_7[0x8];
    HSCRIPT m_hFn;
    CUtlStringToken m_nContext;
    GameTick_t m_nNextThinkTick;
    GameTick_t m_nLastThinkTick;
    char end_pad_8[0x4];
};
