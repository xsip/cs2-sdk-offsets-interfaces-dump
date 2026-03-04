#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CAnimGraphControllerManager {
    char m_controllers[0x18];
    char pad_2740[0x90];
    bool m_bGraphBindingsCreated;
    char pad_2741[0x7];
};
