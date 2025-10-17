#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CStateActionUpdater {
    char m_pAction[0x8];
    animgraphlib_StateActionBehavior m_eBehavior;
    char end_pad_218[0x4];
};
