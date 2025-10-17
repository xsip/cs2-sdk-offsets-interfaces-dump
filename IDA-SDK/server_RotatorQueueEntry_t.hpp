#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_RotatorQueueEntry_t {
    Quaternion qTarget;
    server_RotatorTargetSpace_t eSpace;
    char end_pad_2780[0xc];
};
