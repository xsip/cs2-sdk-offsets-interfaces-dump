#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CAnimGraphControllerManager {
    char m_controllers[0x18];
    char pad_1396[0x90];
    bool m_bGraphBindingsCreated;
    char pad_1397[0x7];
};
