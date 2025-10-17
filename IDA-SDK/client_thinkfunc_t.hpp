#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTick_t.hpp"
#include "entity2_GameTick_t.hpp"

class client_thinkfunc_t {
    char vTable570[0x8];
    HSCRIPT m_hFn;
    CUtlStringToken m_nContext;
    entity2_GameTick_t m_nNextThinkTick;
    entity2_GameTick_t m_nLastThinkTick;
    char end_pad_571[0x4];
};
